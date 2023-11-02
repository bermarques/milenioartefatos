import {
  Button,
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

const CreateItemModal = ({ visible, handleClose }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
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

  return (
    <Modal
      open={visible}
      onCancel={handleClose}
      closeIcon={false}
      footer={null}
    >
      <Content>
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
            <Input />
          </NameContainer>
          <ValueContainer>
            <Typography>Valor</Typography>
            <Input
              addonBefore="R$"
              onChange={(evt) =>
                typeof evt.currentTarget.value !== Number &&
                evt.preventDefault()
              }
            />
          </ValueContainer>
        </HalfContainer>
        <Typography>Descrição</Typography>
        <Input.TextArea rows={4} style={{ resize: "none" }} />
        <Typography>Detalhes</Typography>
        <Input.TextArea />
        <Typography>Em estoque</Typography>
        <Switch />

        <ButtonContainer>
          <Button type="primary">Adicionar produto</Button>
        </ButtonContainer>
      </Content>
    </Modal>
  );
};

export default CreateItemModal;
