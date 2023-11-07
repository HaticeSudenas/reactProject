import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormField, Label } from "semantic-ui-react";
import * as Yup from "yup";
import KodlamaIoTextInput from "../utilities/customFormController/KodlamaIoTextInput";

function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("ürün adı zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunlu")
    })

    return (
        <div className="App">

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                   console.log(values);
                }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
                    
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                    <Button type="submit">Ekle</Button>
                </Form>

            </Formik>
        </div>
    );
}
export default ProductAdd;

/**
 * {//<FormField>
                       // <Field name="productName" placeholder="Ürün Adı"></Field>
                        //<ErrorMessage name="productName" render={error => 
                          //  <Label pointing basic color="red" content={error}></Label>
                        //</FormField>}></ErrorMessage>
                    //</FormField>
                }

                    <FormField>
                        <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                        <ErrorMessage name="unitPrice" render={error => 
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
 */