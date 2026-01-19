const style = {width: 200,backgroundColor: "white",borderRadius: 10,borderColor: "grey",padding: 20};
export function PostContent({ name, subtitle, time, image, description }) {
   return (
     <div style={style}>
       <div style={{ display: "flex" }}>
         <img src={image} style={{width: 40,height: 40,borderRadius: 20,}}/>
         <div style={{ marginLeft: 10 }}>
           <b style = {{fontSize: 15}} >{name}</b>
           <div style = {{fontSize: 15}}>{subtitle}</div>
           {time && <div style = {{fontSize: 12}}>{time}</div>}
         </div>
       </div>
       <div>{description}</div>
     </div>
   );
 }
