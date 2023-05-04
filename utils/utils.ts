import { UpdateLayout } from "./../components/organisms/layouts/updates";
import { VideoLayout } from "./../components/organisms/layouts/video";
import { ListLayout } from "./../components/organisms/layouts/lists";
export const getPageLayout = (layout: string) => {
  let pageLayout = null;
  switch (layout) {
    case "list":
      pageLayout = ListLayout;
      break;
    case "video":
      pageLayout = VideoLayout;
      break;
    case "updates":
      pageLayout = UpdateLayout;
      break;
    default:
      pageLayout = ListLayout;
      break;
  }
  return pageLayout;
};

export const CENTER_STYLE = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
