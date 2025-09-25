export default function DisplayInfo({ name, phone, email }) {
  return (
    <div className="category-card">
      <div className="category-info">
        <p className="category-title">{name}</p>
        <p className="category-title">{phone}</p>
        <p className="category-title">{email}</p>
      </div>
    </div>
  );
}
