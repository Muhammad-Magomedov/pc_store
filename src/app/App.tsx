import { ProductCard, TableRow } from "../shared/ui";

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <h1 className="text-3xl font-bold underline">неужто asdasd?</h1>
      <ProductCard
        title="Водонепроницаемый Рюкзак"
        price={999}
        isFavorite={true}
        img="productPortfel.jpg"
        isStock={true}
      />
        <table className="table-auto w-full">
            <thead>
            <tr>
                <th className="px-4 py-2 text-left">Адрес</th>
                <th className="px-4 py-2 text-left">Режим работы</th>
                <th className="px-4 py-2 text-left">Доступно</th>
                <th className="px-4 py-2 text-left">Количество</th>
                <th className="px-4 py-2 text-left"></th>
            </tr>
            </thead>
            <tbody>
            <TableRow address='Москва, ул. Науки 25' workHours={['пн-сб: 08:00-19:00', 'вс: 09:00-17:00']} availability={true} quantity={3}/>
            </tbody>
        </table>
    </div>
  );
}

export default App;
