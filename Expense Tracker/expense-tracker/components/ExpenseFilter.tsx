import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <div className="my-3">
        <select
          id="categories"
          className="form-select"
          onChange={(event) => onSelectCategory(event.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
