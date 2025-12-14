import Image from "next/image";

type ButtonClickProps = {
	onClick: () => void; // setting the type of onClick to a function
};

export default function ButtonClick({ onClick }: ButtonClickProps) {
	return (
		<button onClick={onClick}>
			<Image src="/gifts.png" width={512} height={512} alt="gifts"/>
		</button>
	)
}