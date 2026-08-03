import React from 'react';

function Insights({ products }) {

  if(products.length === 0){
    return null;
  }

  const highest = products.reduce((a,b)=>
    Number(a.price) > Number(b.price) ? a : b
  );

  const lowest = products.reduce((a,b)=>
    Number(a.price) < Number(b.price) ? a : b
  );

  const available =
    products.filter(
      p=>!p.purchased
    ).length;

  const health =
    (
      available /
      products.length *
      100
    ).toFixed(0);

  return(

<div
className="card mb-5"
style={{
background:"#1e293b",
border:"1px solid #334155",
borderRadius:"15px"
}}
>

<div className="card-body">

<h3 className="mb-4">
📊 Marketplace Insights
</h3>

<div className="row">

<div className="col-md-4">

<h5>
🏆 Highest Product
</h5>

<p className="text-info">

{highest.name}

</p>

</div>

<div className="col-md-4">

<h5>
💸 Cheapest Product
</h5>

<p className="text-warning">

{lowest.name}

</p>

</div>

<div className="col-md-4">

<h5>
📈 Marketplace Health
</h5>

<p className="text-success">

{health}% Available

</p>

</div>

</div>

</div>

</div>

  );

}

export default Insights;