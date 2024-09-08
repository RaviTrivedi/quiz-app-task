import { CircularProgress, Grid2 } from "@mui/material"

const LoaderComponent = () => {
    return (
        <>
            <Grid2
                container
                spacing={0}
                // direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <CircularProgress />
            </Grid2>
        </>
    )
}

export default LoaderComponent