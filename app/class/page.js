// export default function Page() {

//     let catList = [
//     {
//         id: 1,
//         name: 'Gunther',
//         description: 'squinty eyes',
//         imageUrl: 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg',
//     },
//     {
//         id: 2,
//         name: 'Rex',
//         description: 'big teeth',
//         imageUrl: 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg',
//     },
//     {
//         id: 3,
//         name: 'Darcy',
//         description: 'cutie pie',
//         imageUrl: 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg',
//     },
//     ];
    
//     let name = catList[0].name; //Gunther
    
//     catList = catList.filter( (cat) => cat.id !== 1);
    
//     return <main>
//      <ul>
//         {catList.map((cat) => (
//             <li key={cat.id}>
//                 <h2>{cat.name}</h2>
//                 <p>{cat.description}</p>
//                 <img src={cat.imageUrl} />
//             </li>
//         ))}
//      </ul>
//     </main>;
//     }
    