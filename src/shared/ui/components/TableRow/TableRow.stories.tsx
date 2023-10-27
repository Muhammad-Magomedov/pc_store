import { TableRow } from "./TableRow";

export default {
    title: "Components/TableRow",
    component: TableRow,
};

const Template = (args) => <TableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
    address: "Москва, ул. Науки 25",
    workHours: ["пн-сб: 08:00-19:00", "вс: 09:00-17:00"],
    availability: true,
    quantity: 10,
};

export const NotAvailable = Template.bind({});
NotAvailable.args = {
    ...Default.args,
    availability: false,
};

export const LowQuantity = Template.bind({});
LowQuantity.args = {
    ...Default.args,
    quantity: 2,
};