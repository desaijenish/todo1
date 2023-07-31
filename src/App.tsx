import React, { createContext, useEffect, useState } from "react";
import DeleteButton from "./componets/DeleteButton";
import EditeButton from "./componets/EditeButton";
import SubmiteButton from "./componets/submiteButton";
import "./App.css";
import InputText from "./componets/InputText";

export const CurrentUserContext = createContext<null | string[]>(null);

const App = () => {
  const [productname, setproductname] = useState<number | string>('');
  const [checkee , setcheckee] = useState<boolean>(false)
  const [edite , setedite] = useState<number>(0)
  const [data, setdata] = useState<string[]>([]);

  useEffect(() => {
    const name = localStorage.getItem("alldata");
    if (name) {
      setdata(JSON.parse(name));
    }
  }, []);

  const clicksubmitehendler = () => {
    if(edite !== -1){
      const copy:any= [...data]
      copy[edite] = productname
      setdata(copy)
      setedite(-1)
      localStorage.setItem("alldata", JSON.stringify(copy));
    }else{
      const copy: any = [...data];
      copy.push(productname);
      setdata(copy);
      localStorage.setItem("alldata", JSON.stringify(copy));
    }
    setproductname('')
  };

  const deletehendler = (index: number) => {
    const copy: string[] = [...data];
    copy.splice(index, 1);
    setdata(copy);
    localStorage.setItem("alldata", JSON.stringify(copy));
  };

  const editehendler = (index: number,productname:string) => {
    setproductname(productname)
    setedite(index)
  };

  return (
    <CurrentUserContext.Provider value={data}>
      <div>
        <center>
          <InputText
            value={productname}
            click={(e: any) => setproductname(e.target.value)}
          />
          <input type="checkbox" defaultChecked={checkee}   onChange={() => setcheckee(!checkee)}/>
          <br />
          <SubmiteButton click={clicksubmitehendler} />

          <table width={"30%"} border={5} cellSpacing={6} cellPadding={5}>
            <tr>
              <th>ckeckbox</th>
              <th>proudect name</th>
            </tr>
            {data.map((e, i) => {
              return (
                <tr>
                  <input type="checkbox"  defaultChecked={checkee} />
                  <td>{e}</td>
                  <td>
                    <DeleteButton click={() => deletehendler(i)} />
                    <EditeButton click={() => editehendler(i, e)} />
                  </td>
                </tr>
              );
            })}
          </table>
        </center>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
