import "./App.css"

let products = [
	{
		id: 1,
		name: "Zebronics MAX FURY Transparent RGB LED Illuminated Wired Gamepad",
		price: 100,
		image:
			"https://m.media-amazon.com/images/I/51Kumm2y2mL._SX300_SY300_QL70_FMwebp_.jpg",
	},

	{
		id: 2,
		name: "EvoFox Blaze Programmable Gaming Mouse",
		price: 200,
		image:
			"https://m.media-amazon.com/images/I/41MwUWdUZ8L._SX300_SY300_QL70_FMwebp_.jpg",
	},
	{
		id: 3,
		name: "WAR HAMMER Gaming Mouse Pad (DragonFire)",
		price: 100,
		image:
			"https://m.media-amazon.com/images/I/41bZQ1GTauL._SY300_SX300_QL70_FMwebp_.jpg",
	},
	{
		id: 4,
		name: "ZEBRONICS Optimu39.99s Gaming Keyboard & Mouse Combo",
		price: 100,
		image:
			"https://m.media-amazon.com/images/I/41sZmWcNNKL._SX300_SY300_QL70_FMwebp_.jpg",
	},
	{
		id: 5,
		name: "ZEBRONICS Havoc Premium Gaming Over Ear Headphone with Dolby Atmos Subscription",
		price: 200,
		image: "https://m.media-amazon.com/images/I/71YjS4nfPVL._SL1500_.jpg",
	},
	{
		id: 6,
		name: "Ant Esports Elite 1100 Mid-Tower Computer Case/Gaming Cabinet ",
		price: 100,
		image:
			"https://m.media-amazon.com/images/I/41dtRPYZIAL._SX300_SY300_QL70_FMwebp_.jpg",
	},
	{
		id: 7,
		name: "Sony PS4 Slim 500 GB Console",
		price: 100,
		image:
			"https://m.media-amazon.com/images/I/41w32g06cSL._SY300_SX300_QL70_FMwebp_.jpg",
	},
	{
		id: 8,
		name: "Sony PlayStation®5 Console (slim)",
		price: 100,
		image:
			"https://m.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg",
	},
];

export default function App(){
  return <div className="container">
   {
    products.map((prod)=>{
      return <Sample {...prod}/>
    })
   }
  </div>
}

type SampleProps = {
  name: string;
  price: number;
  image: string;
};

const Sample = (props: SampleProps) => {
  return <div className="grid-item">
    <img src={props.image} alt="product" />
    <h3>Product name: {props.name}</h3>
    <h3>Product price: {props.price}</h3>
    <button>Buy Now</button>
  </div>
}