import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({});
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          name="name"
          type="text"
          id="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
    </form>
  );
}
