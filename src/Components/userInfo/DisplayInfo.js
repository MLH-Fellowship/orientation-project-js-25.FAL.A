export default function DisplayInfo({ name, phone, email }) {
  return (
    <div className="category-card">
      <div className="category-info">
        <h3 className="category-title">{name}</h3>
        <p className="category-title">{phone}</p>
        <p className="category-title">{email}</p>
      </div>
    </div>
  );
}