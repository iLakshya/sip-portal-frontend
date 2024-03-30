import { title } from "@/components/primitives";
import { Button } from "antd";

export default function AboutPage() {
	return (
		<div className="sidebar">
			<div className="top-button">
				<Button>Pending Requests</Button>
				<Button>Notify Button</Button>
			</div>
			<div className="bottom-button">
				<Button>Add Admins</Button>
				<Button>Log Out</Button>
			</div>
		</div>
	);
}