import { Button, Modal, Skeleton, Upload } from "antd";
import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addBanner,
  getBanners,
  removeBanner,
} from "../../store/modules/admin/actions";

export const formats = [".jpg", ".jpeg", ".png"];

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadBanner = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const { banners, loadingBanners, loadingAddBanner } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const handleChangeUpload = (info) => {
    setError("");
    if (
      info.file.name.split(".").length < 2 ||
      formats
        .map((item) => item.replace(".", ""))
        .indexOf(info.file.name.split(".")[1]) === -1
    ) {
      setFileList([...fileList.filter((item) => item.uid !== info.file.uid)]);
      setTimeout(
        () =>
          setError("Aceitamos apenas arquivos no formato .jpg, .jpeg ou .png"),
        50
      );
      return;
    }
    setFileList(info.fileList);
    const isOverSized = Number(info?.file?.size) > 10050000;
    if (isOverSized) {
      setTimeout(() => setError("O arquivo precisa ser menor que 10MB!"), 50);
      setFileList([...fileList.filter((item) => item.uid !== info.file.uid)]);
      return;
    }
    if (info.file.status === "uploading") {
    }
    if (info.file.status === "done") {
      dispatch(addBanner(info.file.originFileObj));
    }
    if (info.file.status === "error") {
    }
    if (info.file.status === "removed") {
    }
  };

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

  useEffect(() => {
    if (banners) {
      setFileList(
        banners.map((item, idx) => ({
          id: item.id,
          uid: item.url,
          name: `banner-${idx}`,
          status: "done",
          url: `https://uploadthing.com/f/${item.url}`,
        }))
      );
    }
  }, [banners]);

  useEffect(() => {
    dispatch(getBanners());
  }, []);

  return (
    <>
      <>
        <h2>Imagens do banner (Limite de 4 imagens)</h2>
        {loadingBanners || loadingAddBanner ? (
          [...Array(4)].map((item, key) => (
            <Skeleton.Image
              key={key}
              active
              style={{ marginRight: 8, width: 102, height: 102 }}
            />
          ))
        ) : (
          <>
            <Upload
              customRequest={dummyRequest}
              listType="picture-card"
              fileList={fileList}
              multiple={false}
              onPreview={handlePreview}
              onChange={handleChangeUpload}
              onRemove={(e) => dispatch(removeBanner(e.id))}
            >
              {fileList.length < 4 && uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
            <h3>Atenção: A altura máxima do banner é de 336px</h3>
          </>
        )}
      </>
    </>
  );
};

export default UploadBanner;
