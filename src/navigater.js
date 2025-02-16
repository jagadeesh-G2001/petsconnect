import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Pet } from './pages/Pet';
import { Petaccessories } from './pages/Petaccessories';
import { Login } from './login/login';
import Register from './login/register';
import Cartpage from './pages/cart';
import Dog from './pages/pet/dog'
import Cat from './pages/pet/cat'
import Bird from './pages/pet/bird'
import Hamsters from './pages/pet/Hamsters';
import Fish from './pages/pet/Fish';
import Otherpets from './pages/pet/otherpets';
import Dogform from './pages/pet/petforms/dogadform';
import Catform  from './pages/pet/petforms/catadform';
import Fishform from './pages/pet/petforms/fishadform';
import Hamsterform from './pages/pet/petforms/hamsteradform';
import Otherpetsform from './pages/pet/petforms/otherpetsadform';
import Birdform from './pages/pet/petforms/birdsadform';
export default function Main()
{
return (
<div>
<BrowserRouter>
<Routes>
    <Route exact path='/home' element={<Home/>}/>

    <Route exact path='/' element={<Login/>}/>   
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/Pet' element={<Pet/>}/>
    <Route exact path='/petaccessories' element={<Petaccessories/>} />
    <Route exact path='/cart' element={<Cartpage/>}/>
    <Route exact path='*' element={<Home/>}/>
    <Route exact path='/dog' element={<Dog/>}/>
    <Route exact path='/cat' element={<Cat/>}/>
    <Route exact path='/bird' element={<Bird/>}/>
    <Route exact path='/fish' element={<Fish/>}/>
    <Route exact path='/hamsters' element={<Hamsters/>}/>
    <Route exact path='/otherpets' element={<Otherpets/>}/>
    <Route exact path='/dogadform' element={<Dogform/>}/>
    <Route exact path='/birdsadform' element={<Birdform/>}/>
    <Route exact path='/catadform' element={<Catform/>}/>
    <Route exact path='/hamstersadform' element={<Hamsterform/>}/>
    <Route exact path='/fishadform' element={<Fishform/>}/>
    <Route exact path='/otherpetsadform' element={<Otherpetsform/>}/>










    
     
    
</Routes>

</BrowserRouter>
</div>
);
}