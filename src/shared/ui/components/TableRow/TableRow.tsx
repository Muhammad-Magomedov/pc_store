type TableRow = {
    address: string;
    workHours: string[];
    availability: boolean;
    quantity: number;
}

export const TableRow = ({ address, workHours, availability, quantity }: TableRow) => {
    return (
        <tr className="border-b">
            <td className="text-gray-600 px-4 py-2 text-left">{address}</td>
            <td className="text-gray-600 px-4 py-2 text-left">{workHours.map((workHour, index) =>
                <div key={index}>
                    {workHour} <br/>
                </div>
            )}</td>
            <td className="text-gray-600 px-4 py-2 text-left">{availability ? 'В наличии' : 'Нет в наличии'}</td>
            <td className="text-gray-600 px-4 py-2 text-left">{quantity}</td>
            <td className="px-4 py-2 text-left">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Купить
                </button>
            </td>
        </tr>
    );
};