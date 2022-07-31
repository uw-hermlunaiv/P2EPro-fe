import classNames from "classnames";
import { Field } from "formik";

type Props = {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
};

const Input = function ({
  name,
  className = "",
  label = "",
  placeholder = "",
  disabled,
  type = "",
}: Props) {
  return (
    <Field name={name}>
      {(formikMeta: any) => {
        const { meta } = formikMeta;
        const showError = meta?.touched && meta?.error;

        return (
          <div className={classNames("w-full", className)}>
            {label && <p className="mb-1">{label}</p>}
            <input
              className="w-full border border-gray-200 px-2 py-1.5 rounded-md"
              type={type}
              name={name}
              disabled={disabled}
              {...formikMeta?.field}
              placeholder={placeholder}
            />
            {showError && (
              <p className="text-xs text-red-400 mt-1">{meta?.error}</p>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default Input;
