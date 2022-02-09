# To-Do-List (Server)

## Please find the client application here [Client](https://github.com/sameerad2001/To_Do_List__client)


## How does the application work

- The backend API handles requests to the following routes
```
Fetch all the lists (GET) : localhost:5000/lists
Create a new list (POST) : localhost:5000/lists
Delete a list (DELETE) : localhost:5000/lists/listNumber/ <list number>
Modify a list (PATCH) : localhost:5000/lists/listNumber/ <list number>
```
- The front-end component fetches the required data using `Axios`
```js
let baseURL = "http://localhost:5000/lists";

axios.get(baseURL)
    .then((res) => {
        setLists(res.data.reverse())
        setNumberOfLists(res.data[0] ? res.data[0].listNumber : 0)
    })
    .catch((err) => { throw err })
```
- This data is then mapped to cards and these cards are displayed inside a `Masonry` component ([react-masonry-css](https://www.npmjs.com/package/react-masonry-css))
```js
<Masonry
    breakpointCols={breakpoints}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
>
    {lists.map(createListCard)}

</Masonry>
```

## What can this application do?

#### **Display** the to lists

<img src = "https://github.com/sameerad2001/To_Do_List__server/blob/master/Demo/Demo1.jpg" alt = "Website Demo"/>

#### **Add** a new to-do list

<img src = "https://github.com/sameerad2001/To_Do_List__server/blob/master/Demo/Demo3.jpg" alt = "Website Demo"/>

#### **Edit** and **delete** a previously made to-do list

<img src = "https://github.com/sameerad2001/To_Do_List__server/blob/master/Demo/Demo4.jpg" alt = "Website Demo"/>


<hr>

Sameer Ahmed <br/>
Email : <sameerad2001@gmail.com> <br/>
Linkdin : <https://www.linkedin.com/in/sameer-ahmed-0b7902176/>