import ComponentWithStyle from "./styles";
import {Card, Loading, Text} from "@nextui-org/react";
import FormProvider from "@/shared/components/form/provider";
import TextField from "@/shared/components/form/text-field";
import TextareaField from "@/shared/components/form/textarea";
import Button from "@/shared/components/button";
import useCreateFlow from "@/modules/new-flow/hooks/create-flow";

const FormNewRoadMap = () => {
    const createFlow = useCreateFlow();
    const submitForm = (values) => {
        createFlow.action({textOrder: values.textOrder, token: values.token})
    }
    return (
        <ComponentWithStyle>
            <Card className="card">
                <Text size={16} color="$secondaryText">
                    Enter the relevant token and your content to draw automatically.
                </Text>
                <FormProvider
                    returnToParent={false}
                    defaultValues={{token: '', textOrder: ''}}
                    onSubmit={async (values) => {
                        submitForm(values);
                    }}
                >
                    <div className="formContainer">
                        <TextField
                            type={'token'}
                            label="token"
                            fullWidth
                            clearable
                            bordered
                            name="token"
                        />
                        <TextareaField
                            rows={6}
                            type={'textOrder'}
                            label="textOrder"
                            fullWidth
                            clearable
                            bordered
                            name="textOrder"
                        />
                        <Button
                            className="submitButton"
                            size={"lg"}
                            disabled={createFlow.status === 'loading'}
                            type="submit"
                        >
                            {createFlow.status === 'loading' &&
                                <Loading type="points" color="currentColor" size="sm"/>
                            }
                            {createFlow.status !== 'loading' &&
                                <>submit</>
                            }
                        </Button>
                    </div>
                </FormProvider>
            </Card>
        </ComponentWithStyle>
    )
};
export default FormNewRoadMap;
