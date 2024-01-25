
/*
    This is basically a simple field that can be reused in forms.
*/

type FieldChangeCallback = (fieldValue: string) => void;

type FieldChangeProps = {
    fieldName: string;
    onFieldChange: FieldChangeCallback;
    required?: boolean;
}

const Field = (fieldChangeProps: FieldChangeProps) => (
    <div className={fieldChangeProps.required ? "required_label" : ""}>
        <label>{fieldChangeProps.fieldName}</label>: <input name={fieldChangeProps.fieldName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => fieldChangeProps.onFieldChange(event.target.value.trim() ?? "")} />
    </div>
);

export default Field;