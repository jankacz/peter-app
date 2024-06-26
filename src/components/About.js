import {Box, Grid, Typography} from "@mui/material";

const [KamilImg, MatiImg, DominImg] = ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"];

const DATA = [
    {
        name: "Kamil",
        personPhoto: KamilImg,
        description:
            "Cześć jestem studentem fizjoterapii na Uniwersytecie Medycznym w Poznaniu, oraz uczęszczam do drugiej szkoły gdzie kształcę się w kierunku technika masażysty, aby poszerzyć zakres swoich umiejętności. Oprócz tego skończyłem kurs Masażu tkanek głębokich i rozluźniania mięśniowo-powięziowego. Szczególnie interesuje się również ortopedią i neurologią",
    },
    {
        name: "Mateusz",
        personPhoto: MatiImg,
        description:
            "Hej! Aktualnie studiuję fizjoterapię na Uniwersytecie Medycznym w Poznaniu i również jak Kamil uczę się w drugiej szkole pod kątem otrzymania kwalifikacji zawodowych technika masażysty. Jestem również certyfikowanym trenerem personalnym, a ponadto ukończyłem kurs masażu tkanek głębokich z rozluźnianiem mięśniowo-powięziowym. Najbardziej fascynują mnie pacjenci “bólowi”, sportowi i ortopedyczni.",
    },
    {
        name: "Dominik",
        personPhoto: DominImg,
        description:
            "Cześć, mam na imię Dominik i studiuje na Akademii Wychowania Fizycznego w Poznaniu. Od najmłodszych lat interesowałem się sportem jak i aktywnie go uprawiałem. Z tym też jest powiązany mój kierunek, czyli 'Sport'. Uczę się by zostać w przyszłości trenerem ze specjalizacją jaką podjąłem na studiach- podnoszenie ciężarów, natomiast to nie wszystko i nie ograniczam się tylko do tej dyscypliny, zarówno sporty siłowe jak i sylwetkowe to coś co mnie pasjonuje!",
    },
];

function About(){


    return(<Box>
        <Grid container spacing={6} alignItems={"stretch"} direction="column">
            {DATA.map((item, index) =>
            {
                if(index %2 === 0){
                    return (
                        <Grid item>
                            <Grid container justifyContent={"space-between"} alignItems={"center"} direction="row">
                                <Grid item>
                                    <Typography sx={{width:"600px"}} variant="h5" component="h2">
                                        {item.name} {item.description}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box
                                        component="img"
                                        alt="You can't load image"
                                        sx={{width:"400px"}}
                                        src={item.personPhoto}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                } else{
                    return (
                        <Grid item>
                            <Grid container justifyContent={"space-between"} alignItems={"center"} direction="row">
                                <Grid item>
                                    <Box
                                        component="img"
                                        alt="You can't load image"
                                        sx={{width:"400px"}}
                                        src={item.personPhoto}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{width:"600px"}} variant="h5" component="h2">
                                        {item.name} {item.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
            }
            )}

        </Grid>

    </Box>)
}

export default About;