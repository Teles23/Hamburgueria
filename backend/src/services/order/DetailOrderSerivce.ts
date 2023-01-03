import prismaClient from "../../prisma";

interface DetailRequest {
	order_id: string;
}

class DetailOrderSerivce {
	async execute({ order_id }: DetailRequest) {
		const orders = await prismaClient.item.findMany({
			where: {
				orderId: order_id,
			},
			include: {
				Product: true,
				Order: true,
			},
		});

		return orders;
	}
}

export { DetailOrderSerivce };
