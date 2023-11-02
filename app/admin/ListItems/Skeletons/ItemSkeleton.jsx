import { Skeleton } from "antd";

const ItemSkeleton = () => {
  return (
    <>
      <Skeleton.Input block style={{ height: 74 }} active />
      <Skeleton.Input block style={{ height: 74 }} active />
    </>
  );
};

export default ItemSkeleton;
