import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";
import { Widget as AutoIdWidget } from "@ncwidgets/id";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ServicePageTemplate from "./preview-templates/ServicePagePreview";
import ServicesPageTemplate from "./preview-templates/ServicesPagePreview";

import "./styles.css";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerWidget(AutoIdWidget);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("service", ServicePageTemplate);
CMS.registerPreviewTemplate("services", ServicesPageTemplate);
