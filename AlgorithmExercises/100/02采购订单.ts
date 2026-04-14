interface product {
    id: number,
    num: number,
    price: number,
    status: ProductStatus
}
enum ProductStatus {
    Approved = 0,
    Rejected = 1,
    Pending = 2
}

interface approvedList {
    id: number,
    num: number,
    price: number,
    discountPrice: number;
}
const processProducts = (productArr: product[]): approvedList[] => {
    const res: approvedList[] = []
    const order = new Map<number, [number, number]>()
    for (const product of productArr) {
        const { id, num, price, status } = product
        // 仅处理审批通过的商品
        if (status !== ProductStatus.Approved) continue

        if (price > 100) {
            res.push({
                id,
                num,
                price,
                discountPrice: price
            })
        } else {
            if (!order.has(id)) {
                order.set(id, [0, price])
            }
            const [count, p] = order.get(id)
            order.set(id, [count + num, p])
        }
    }

    // 处理低价商品合并结果
    for (const [id, [num, price]] of order.entries()) {
        const tmp: approvedList = {
            id,
            price,
            num,
            discountPrice: price
        }
        if (num >= 100) {
            tmp.discountPrice = Math.ceil(price * 0.9)
        }

        res.push(tmp)
    }

    return res
}

const testProducts = [
    { id: 1, num: 50, price: 90, status: 0 },
    { id: 1, num: 60, price: 90, status: 0 },
    { id: 2, num: 20, price: 150, status: 0 },
    { id: 3, num: 80, price: 80, status: 1 },
    { id: 4, num: 100, price: 80, status: 2 },
];
console.log(processProducts(testProducts));
