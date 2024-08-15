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
    name: "Jon Snow",
    email: "jonsnow@thewall.com",
    age: 25,
    phone: "(123)456-7890",
    address: "1 Castle Black, The Wall, NW 10001",
    city: "The Wall",
    zipCode: "10001",
    registrarId: 334512,
  },
  {
    id: 2,
    name: "Daenerys Targaryen",
    email: "daenerys@dragonstone.com",
    age: 28,
    phone: "(987)654-3210",
    address: "2 Dragonstone Way, Westeros, WR 20002",
    city: "Dragonstone",
    zipCode: "20002",
    registrarId: 334513,
  },
  {
    id: 3,
    name: "Cersei Lannister",
    email: "cersei@casterlyrock.com",
    age: 42,
    phone: "(111)222-3333",
    address: "3 Casterly Rock, Lannisport, LR 30003",
    city: "Lannisport",
    zipCode: "30003",
    registrarId: 4133514,
  },
  {
    id: 4,
    name: "Jamie Lannister",
    email: "jamie@casterlyrock.com",
    age: 40,
    phone: "(444)555-6666",
    address: "4 Gold Street, King's Landing, KL 40004",
    city: "King's Landing",
    zipCode: "40004",
    registrarId: 334514,
  },
  {
    id: 5,
    name: "Theon Greyjoy",
    email: "theon@pyke.com",
    age: 30,
    phone: "(777)888-9999",
    address: "5 Iron Islands, Pyke, II 50005",
    city: "Pyke",
    zipCode: "50005",
    registrarId: 334515,
  },
  {
    id: 6,
    name: "Brienne of Tarth",
    email: "brienne@tarth.com",
    age: 32,
    phone: "(000)111-2222",
    address: "6 Sapphire Isle, Tarth, TI 60006",
    city: "Tarth",
    zipCode: "60006",
    registrarId: 334516,
  },
  {
    id: 7,
    name: "Eddard Stark",
    email: "eddard@winterfell.com",
    age: 48,
    phone: "(333)444-5555",
    address: "7 Winterfell Keep, Winterfell, WF 70007",
    city: "Winterfell",
    zipCode: "70007",
    registrarId: 334517,
  },
  {
    id: 8,
    name: "Ygritte",
    email: "ygritte@freefolk.com",
    age: 23,
    phone: "(555)666-7777",
    address: "8 Beyond the Wall, Free Folk, FW 80008",
    city: "Free Folk",
    zipCode: "80008",
    registrarId: 334518,
  },
  {
    id: 9,
    name: "Tormund Giantsbane",
    email: "tormund@wildlings.com",
    age: 35,
    phone: "(888)999-0000",
    address: "9 Frostfangs, Beyond the Wall, BW 90009",
    city: "Frostfangs",
    zipCode: "90009",
    registrarId: 334519,
  },
  {
    id: 10,
    name: "Jorah Mormont",
    email: "jorah@bearisland.com",
    age: 45,
    phone: "(999)000-1111",
    address: "10 Bear Island, The North, BN 10010",
    city: "Bear Island",
    zipCode: "10010",
    registrarId: 334520,
  },
  {
    id: 11,
    name: "Davos Seaworth",
    email: "davos@stormsend.com",
    age: 50,
    phone: "(111)222-3334",
    address: "11 Storm's End, Stormlands, SL 11011",
    city: "Storm's End",
    zipCode: "11011",
    registrarId: 334521,
  },
];
