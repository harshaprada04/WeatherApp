import { useEffect, useState } from "react";
import Card from "./Card";
import { useLocation, useNavigate, useParams } from "react-router";
import classes from "./CountryFlag.module.css";
import { Button } from "@mui/material";

function CountryFlagPage() {
  const navigation = useNavigate();
  const { search } = useLocation();
  const imageURL = new URLSearchParams(search).get("flag_url");
  
  const [image, setImage] = useState<any>([]);
  async function fetechImage(imageURL: any) {
    let response: any = await fetch(imageURL);
    const imageBlob: any = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImage(imageObjectURL);
  }
  useEffect(() => {
    fetechImage(imageURL);
  }, [imageURL]);
  
  return (
    <Card>
      <img className ={classes.iamge} src={image} alt="Country_Flag"></img>
      <Button
      data-testid= "flag_previous_page_btn"
      className={classes.btn}
      style={{fontFamily:"'BIZ UDMincho', serif",textTransform:"none"}}
        variant="contained"
        color="secondary"
        onClick={() => {
          navigation("/countryDetails");
        }}
      >
        Previous Page
      </Button>
    </Card>
  );
}

export default CountryFlagPage;
