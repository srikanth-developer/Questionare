import { Grid, Paper, TablePagination } from '@material-ui/core'
import { Home} from '@material-ui/icons'
import { Pagination, Stack } from '@mui/material'
import React from 'react'

function PageNavigation() {
    return (
        <div>
             <Paper> 
                <Grid container>
                    <Grid item>
                       <Home></Home>
                    </Grid>
                    <Grid item>
                       <Stack spacing={2}>
                         <Pagination count={3} />
                         </Stack>
                     </Grid>
                   {/* <Grid item>
                   {<h1>Footer Section</h1>}
                   </Grid> */}
      
   
                        </Grid>
                    
        
           
            </Paper>
        </div>
    )
}

export default PageNavigation

