import Card from "./Card";

const Block = ({title,content})=>{
    const rendercard = [1,2,3,4,5,6].map((i)=>{
        return <Card/>
    })
return <>
<div className="title">
    <h2>{title}</h2>
</div>
<section className="block">
    {rendercard}
</section>
</>
}
export default Block;