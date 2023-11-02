import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Switch,
  Typography,
  Upload,
  message,
} from "antd";
import {
  ButtonContainer,
  Content,
  HalfContainer,
  NameContainer,
  UploadContainer,
  ValueContainer,
} from "./styles";
import { useState } from "react";
import { AiOutlineLoading, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createProduct } from "@/app/store/modules/products/actions";

const CreateItemModal = ({ visible, handleClose }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const dispatch = useDispatch();
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
    dispatch(createProduct(e));
  };

  return (
    <Modal
      open={visible}
      onCancel={handleClose}
      closeIcon={false}
      footer={null}
    >
      <Content>
        <Form onFinish={handleFinish}>
          <UploadContainer>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              //   fileList={fileList}
              multiple={false}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
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
          <Form.Item noStyle name="value">
            <InputNumber />
          </Form.Item>
          <Typography>Detalhes</Typography>
          <Form.Item noStyle name="details">
            <Input.TextArea />
          </Form.Item>
          <Typography>Em estoque</Typography>
          <Form.Item noStyle name="inStock">
            <Switch />
          </Form.Item>

          <ButtonContainer>
            <Button type="primary" htmlType="submit">
              Adicionar produto
            </Button>
          </ButtonContainer>
        </Form>
      </Content>
    </Modal>
  );
};

export default CreateItemModal;
