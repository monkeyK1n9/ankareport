export interface ITranslations {
    // BaseReportItemProperties
    "Name": string;
    "X": string;
    "Y": string;
    "Width": string;
    "Height": string;

    // StyleProperties
    "Color": string;
    "Background Color": string;
    "Text Align": string;
    "Border Width": string;
    "Border Style": string;
    "Border Color": string;
    "Font Family": string;
    "Font Size": string;
    "Font Weight": string;

    // TextReportItemProperties
    "Text": string;
    "Binding": string;
    "Format": string;

    // ImageReportItemProperties
    "Source": string;

    // BarcodeReportItemProperties
    "Value": string;
    "Bar Width": string;

    // Toolbar buttons
    "Save": string;
    "Undo": string;
    "Redo": string;
    "Image": string;
    "Barcode": string;

    // Elements tree section labels
    "Header": string;
    "Content": string;
    "Footer": string;

    // Sidebar panel/tab titles
    "Data Source": string;
    "Elements": string;
    "Properties": string;
}

export const defaultTranslations: ITranslations = {
    "Name": "Name",
    "X": "X",
    "Y": "Y",
    "Width": "Width",
    "Height": "Height",
    "Color": "Color",
    "Background Color": "Background Color",
    "Text Align": "Text Align",
    "Border Width": "Border Width",
    "Border Style": "Border Style",
    "Border Color": "Border Color",
    "Font Family": "Font Family",
    "Font Size": "Font Size",
    "Font Weight": "Font Weight",
    "Text": "Text",
    "Binding": "Binding",
    "Format": "Format",
    "Source": "Source",
    "Value": "Value",
    "Bar Width": "Bar Width",
    "Save": "Save",
    "Undo": "Undo",
    "Redo": "Redo",
    "Image": "Image",
    "Barcode": "Barcode",
    "Header": "Header",
    "Content": "Content",
    "Footer": "Footer",
    "Data Source": "Data Source",
    "Elements": "Elements",
    "Properties": "Properties",
};