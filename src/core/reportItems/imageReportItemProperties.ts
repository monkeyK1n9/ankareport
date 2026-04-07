import ImageSelector from "../../components/propertyGrid/editors/imageSelector";
import { Property } from "../../components/propertyGrid/property";
import { ITranslations } from "../translations/translations-contract";
import BaseReportItemProperties from "./baseReportItemProperties";

export default class ImageReportItemProperties extends BaseReportItemProperties {
  constructor(translations?: Partial<ITranslations>) {
    super(translations);
  }
  private _source = "";
  private _binding = "";

  get source() {
    return this._source;
  }
  get binding() {
    return this._binding;
  }

  set source(value: string) {
    const oldValue = this.source;
    this._source = value;
    this.emitOnChange("source", value, oldValue);
  }
  set binding(value: string) {
    const oldValue = this.binding;
    this._binding = value;
    this.emitOnChange("binding", value, oldValue);
  }

  getPropertyDefinitions(): Property[] {
    return [
      {
        field: "source",
        label: this.translations?.source ?? "Source",
        type: "string",
        editor: new ImageSelector(),
      },
      {
        field: "binding",
        label: this.translations?.binding ?? "Binding",
        type: "string",
      },
      ...super.getPropertyDefinitions(),
    ];
  }
}
