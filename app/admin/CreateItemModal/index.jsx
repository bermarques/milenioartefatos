import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Spin,
  Switch,
  Typography,
  Upload,
  message,
} from "antd";
import {
  ButtonContainer,
  Content,
  HalfContainer,
  ItemContainer,
  NameContainer,
  UploadContainer,
  ValueContainer,
} from "./styles";
import { useState, useEffect } from "react";
import {
  AiOutlineLoading,
  AiOutlinePlus,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "app/store/modules/products/actions";
import { editProduct, getDetails } from "../../store/modules/products/actions";

export const formats = [".jpg", ".jpeg", ".png"];

const CreateItemModal = ({ handleClose }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const [modalAction, setModalAction] = useState("CREATE");
  const [productId, setProductId] = useState(null);
  const [switchToggle, setSwitchToggle] = useState(false);
  const [productCategory, setProductCategory] = useState(undefined);

  const [form] = Form.useForm();

  const { loadingCreateProducts, productDetails, loadingDetails } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleCancel = () => setPreviewOpen(false);

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChangeUpload = (info) => {
    setError("");
    if (
      info.file.name.split(".").length < 2 ||
      formats
        .map((item) => item.replace(".", ""))
        .indexOf(info.file.name.split(".")[1]) === -1
    ) {
      setFileList([]);
      setTimeout(
        () =>
          setError("Aceitamos apenas arquivos no formato .jpg, .jpeg ou .png"),
        50
      );
      return;
    }
    setFileList([info.file]);
    const isOverSized = Number(info?.file?.size) > 10050000;
    if (isOverSized) {
      setFileList([]);
      setTimeout(() => setError("O arquivo precisa ser menor que 10MB!"), 50);
      return;
    }
    if (info.file.status === "uploading") {
    }
    if (info.file.status === "done") {
    }
    if (info.file.status === "error") {
    }
    if (info.file.status === "removed") {
      setFileList([]);
    }
  };

  const open = (action = "CREATE", id, selectedKey) => {
    setVisible(true);
    setModalAction(action);
    id && setProductId(id);
    selectedKey && setProductCategory(selectedKey);
  };

  const close = () => {
    setVisible(false);
    setModalAction("CREATE");
    setProductId(null);
    form.resetFields();
    setFileList([]);
    handleClose?.();
    setProductCategory(undefined);
    setSwitchToggle(false);
  };

  useEffect(() => {
    modalAction === "EDIT" && dispatch(getDetails(productId));
  }, [modalAction]);

  useEffect(() => {
    if (productDetails) {
      form.setFieldsValue({
        name: productDetails.name,
        description: productDetails.description,
        indications: productDetails.indications,
        providingAndDurability: productDetails.providingAndDurability,
        inStock: productDetails.inStock,
        recommendations: productDetails.recommendations?.map((item) => ({
          text: item.text,
        })),
      });
      setFileList([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: `https://uploadthing.com/f/${productDetails.image}`,
        },
      ]);
      setSwitchToggle(!!form.getFieldValue("inStock"));
    }
  }, [productDetails]);

  CreateItemModal.open = open;
  CreateItemModal.close = close;

  const options = [
    { label: "Estofados", value: "upholstery" },
    { label: "Bolsas", value: "purses" },
    { label: "Comunicação visual", value: "visualCommunication" },
    { label: "Decoração", value: "decoration" },
    { label: "Tapeçaria", value: "tapestry" },
    { label: "Toldo", value: "awning" },
  ];

  const uploadButton = (
    <div>
      <AiOutlinePlus />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const handleFinish = (e) => {
    const file = fileList[0].url ? fileList[0].url : fileList[0]?.originFileObj;
    modalAction === "EDIT"
      ? dispatch(editProduct(e, file, productDetails.category, productId))
      : dispatch(createProduct(e, fileList[0]?.originFileObj, productCategory));
  };

  return (
    <Modal open={visible} onCancel={close} closeIcon={false} footer={null}>
      <Content>
        {loadingDetails && modalAction === "EDIT" ? (
          <div style={{ textAlign: "center" }}>
            <Spin />
          </div>
        ) : (
          <Form onFinish={handleFinish} form={form} layout="vertical">
            <UploadContainer>
              <Upload
                customRequest={dummyRequest}
                listType="picture-card"
                fileList={fileList}
                multiple={false}
                onPreview={handlePreview}
                onChange={handleChangeUpload}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              {error}
            </UploadContainer>
            <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
            <HalfContainer>
              <NameContainer>
                <Typography>Nome do produto</Typography>
                <Form.Item noStyle name="name">
                  <Input />
                </Form.Item>
              </NameContainer>
            </HalfContainer>
            <Typography>Descrição</Typography>
            <Form.Item noStyle name="description">
              <Input.TextArea rows={4} style={{ resize: "none" }} />
            </Form.Item>
            <Typography>Indicações</Typography>
            <Form.Item noStyle name="indications">
              <Input.TextArea />
            </Form.Item>
            <Typography>Fornecimento e durabilidade</Typography>
            <Form.Item noStyle name="providingAndDurability">
              <Input.TextArea />
            </Form.Item>
            <Typography>Em estoque</Typography>
            <Form.Item noStyle name="inStock">
              <Switch
                onChange={(val) => setSwitchToggle(val)}
                checked={switchToggle}
              />
            </Form.Item>

            <Form.List
              name="recommendations"
              initialValue={[{ text: "" }]}
              rules={[
                {
                  validator: async (_, items) => {
                    if (!items || items.length < 1) {
                      return Promise.reject(
                        new Error(
                          "Necessário adicionar pelo menos uma recomendação"
                        )
                      );
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }, idx) => {
                    return (
                      <>
                        <ItemContainer key={key}>
                          <Form.Item
                            {...restField}
                            name={[name, "text"]}
                            label={idx === 0 ? `Recomendações` : ""}
                            style={{ width: "100%" }}
                            rules={[
                              {
                                required: true,
                                whitespace: true,
                                message: "Necessário descrever a recomendação",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>

                          {idx > 0 ? (
                            <AiOutlineMinusCircle
                              className="dynamic-delete-button"
                              onClick={() => remove(name)}
                            />
                          ) : null}
                        </ItemContainer>
                      </>
                    );
                  })}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<AiOutlinePlus />}
                    >
                      Adicionar recomendação
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item name="tags">
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Filtros"
                options={options}
              />
            </Form.Item>
            <ButtonContainer>
              <Button
                type="primary"
                htmlType="submit"
                loading={loadingCreateProducts}
                disabled={loadingCreateProducts}
              >
                Adicionar produto
              </Button>
            </ButtonContainer>
          </Form>
        )}
      </Content>
    </Modal>
  );
};

export default CreateItemModal;
