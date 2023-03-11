// Вспомогательная функция для вывода результата
const memoLog = (title: string, info: string | number | object) => {
    console.log(info)
    const memo = document.getElementById('log') as HTMLTextAreaElement
    if (memo) {
        const text: string = (typeof info === 'object') ? JSON.stringify(info, null, '\t') : info.toString();
        memo.value += `${title}\n\n${text}\n------------------\n`;
    }
}

// Задание 1
interface IPrice { price: number, discount: number, isInstallment: boolean, months: number }

const totalPrice = ({ price, discount, isInstallment, months }: IPrice): number => {
    let res = price * (100 - discount) / 100
    if (isInstallment) res /= months
    return res
};

// Задание 2
interface IPost { id: string, title: string, body: string }
interface IByIdPosts { [key: string]: IPost }
interface INormalyzedPosts { byId: IByIdPosts, allIds: string[] }

const posts: IPost[] = [
    {
        id: '62e69d5a5458aac0ed320b35',
        title: 'id labore ex et quam laborum',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
    },
    {
        id: '62e69d5a5458aac0ed320b1c',
        title: 'quo vero reiciendis velit similique earum',
        body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
    },
    {
        id: '62e69d5a5458aac0ed320b32',
        title: 'odio adipisci rerum aut animi',
        body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
    },
    {
        id: '62e69d5a5458aac0ed320b39',
        title: 'alias odio sit',
        body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
    },
    {
        id: '62e69d5a5458aac0ed320b53',
        title: 'vero eaque aliquid doloribus et culpa',
        body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
    },
    {
        id: '62e69d5a5458aac0ed320b19',
        title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
    },
    {
        id: '62e69d5a5458aac0ed320b25',
        title: 'repellat consequatur praesentium vel minus molestias voluptatum',
        body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
    }
];

const normalizeData = (unnormalizedData: IPost[]): INormalyzedPosts => {
    const res: INormalyzedPosts = { byId: {}, allIds: [] };
    unnormalizedData.forEach((post: IPost) => { res.byId[post.id] = post, res.allIds.push(post.id) })
    return res;
}

// Задание 3

interface IData {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = <T>(url: string): Promise<T> => {
    return new Promise<T>(
        (resolve, reject) => {
            fetch(url).then((response: Response) => response.ok ? resolve(response.json()) : reject(response.status));
        })
}

// Вывод результата
memoLog('Задание 1:', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
memoLog('Задание 2:', normalizeData(posts));
getData<IData[]>(COMMENTS_URL)
    .then((data: IData[]) => {
        memoLog('Задание 3:', data.map((d: IData) => `ID: ${d.id}, Email: ${d.email}`).join('\n'));
    }).catch((err) => console.error('Error:', err));