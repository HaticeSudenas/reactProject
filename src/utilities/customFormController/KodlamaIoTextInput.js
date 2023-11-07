import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

function KodlamaIoTextInput({...props}){
    //console.log(props)
    const [field,meta]=useField(props);
    //console.log(meta)
    return(
        <div>
          <FormField error={!!meta.error&&meta.touched}>
            <input {...props} {...field}></input>
            {meta.touched && !!meta.error?(
                <Label pointing color="red" basic content={meta.error}></Label>
            ):null}
          </FormField>
        </div>
    )
}
export default KodlamaIoTextInput;  