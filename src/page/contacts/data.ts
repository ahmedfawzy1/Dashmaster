// Interface for a column in the DataGrid
interface Column {
  field: string;
  headerName: string;
  width?: number;
  flex?: number;
  cellClassName?: string;
  type?: "number" | "string" | "date";
  headerAlign?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
}

// Interface for a row in the DataGrid
interface Row {
  id: number;
  registrarId: number;
  name: string;
  age: number;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

export const columns: Column[] = [
  { field: "id", headerName: "ID", width: 33 },
  { field: "registrarId", headerName: "Registrar ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
    width: 44,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
  },
];

export const rows: Row[] = [
  {
    id: 1,
    name: "Arya Stark",
    email: "aryastark@gmail.com",
    age: 18,
    phone: "(666)121-5555",
    address: "123 Winterfell Lane, Alabama, SY 10002",
    city: "Winterfell",
    zipCode: "10002",
    registrarId: 223512,
  },
  {
    id: 2,
    name: "Sansa Stark",
    email: "sansastark@gmail.com",
    age: 26,
    phone: "(422)314-2299",
    address: "567 Stark Street, New York, NY 10002",
    city: "New York",
    zipCode: "13152",
    registrarId: 223513,
  },
  {
    id: 3,
    name: "Tyrion Lannister",
    email: "tyrionlannister@gmail.com",
    age: 39,
    phone: "(423)982-6740",
    address: "789 Lannister Blvd, Estanza, NAY 42126",
    city: "Estanza",
    zipCode: "87282",
    registrarId: 4132514,
  },
  {
    id: 4,
    name: "Bran Stark",
    email: "branstark@gmail.com",
    age: 17,
    phone: "(922)425-6753",
    address: "910 Main Street, New York, NY 22299",
    city: "New York",
    zipCode: "15552",
    registrarId: 223514,
  },
  {
    id: 5,
    name: "Robert Baratheon",
    email: "robertbaratheon@gmail.com",
    age: 45,
    phone: "(422)445-1190",
    address: "11222 Kings Ave, King's Landing, CD 21322",
    city: "King's Landing",
    zipCode: "14216",
    registrarId: 223515,
  },
  {
    id: 6,
    name: "Melisandre",
    email: "melisandre@gmail.com",
    age: 200,
    phone: "(233)545-6494",
    address: "567 Canvile Street, Esvazark, NY 10002",
    city: "Esvazark",
    zipCode: "10002",
    registrarId: 223516,
  },
  {
    id: 7,
    name: "Sandor Clegane",
    email: "sandorclegane@gmail.com",
    age: 35,
    phone: "(544)124-0124",
    address: "333 Hound Street, Everting, ZO 515235",
    city: "Evertin",
    zipCode: "51524",
    registrarId: 223517,
  },
  {
    id: 8,
    name: "Petyr Baelish",
    email: "petyrbaelish@gmail.com",
    age: 42,
    phone: "(223)444-5556",
    address: "789 Ever Blvd, Wentington, AD 142214",
    city: "Esteras",
    zipCode: "44216",
    registrarId: 512316,
  },
  {
    id: 9,
    name: "Jorah Mormont",
    email: "jorahmormont@gmail.com",
    age: 52,
    phone: "(445)555-6240",
    address: "910 Avery Street, Cantory, ND 212413",
    city: "Colunza",
    zipCode: "111235",
    registrarId: 928398,
  },
  {
    id: 10,
    name: "Bronn",
    email: "bronn@gmail.com",
    age: 41,
    phone: "(223)444-5557",
    address: "101 Easer Blvd, Wentington, AD 142215",
    city: "Esteras",
    zipCode: "44217",
    registrarId: 533216,
  },
  {
    id: 11,
    name: "Samwell Tarly",
    email: "samwelltarly@gmail.com",
    age: 24,
    phone: "(445)555-6241",
    address: "112 Fiveton Street, CunFory, ND 212414",
    city: "Colunza",
    zipCode: "1235",
    registrarId: 92198,
  },
];
