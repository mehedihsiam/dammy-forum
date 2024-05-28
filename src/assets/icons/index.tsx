import Test from "./testsvg.svg?react";
import User from "./user.svg?react";
import HeartOutlined from "./heart-outline.svg?react";
import HeartFilled from "./heart.filled.svg?react";
import Details from "./details.svg?react";
import Share from "./share.svg?react";

const Icons = {
  Test: (height: number, width: number, fill: string) => (
    <Test height={height} width={width} fill={fill} />
  ),
  User: (height: number, width: number, fill: string) => (
    <User height={height} width={width} fill={fill} />
  ),
  HeartOutlined: (height: number, width: number, fill: string) => (
    <HeartOutlined height={height} width={width} fill={fill} />
  ),
  HeartFilled: (height: number, width: number, fill: string) => (
    <HeartFilled height={height} width={width} fill={fill} />
  ),
  Details: (height: number, width: number, fill: string) => (
    <Details height={height} width={width} fill={fill} />
  ),
  Share: (height: number, width: number, fill: string) => (
    <Share height={height} width={width} color={fill} />
  ),
};

export default Icons;
