import './App.css'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const regions = {
    1: "Jihočeský",
    14: "Jihomoravský",
    3: "Karlovarský",
    6: "Královéhradecký",
    5: "Liberecký",
    12: "Moravskoslezský",
    8: "Olomoucký",
    7: "Pardubický",
    2: "Plzeňský",
    10: "Praha",
    11: "Středočeský",
    4: "Ústecký",
    13: "Vysočina",
    9: "Zlínský",
  };

  const districts = {
    56: "Praha-východ",
    57: "Praha-západ",
    81: "Praha 1",
    82: "Praha 2",
    83: "Praha 3",
    84: "Praha 4",
    85: "Praha 5",
    86: "Praha 6",
    87: "Praha 7",
    88: "Praha 8",
    89: "Praha 9",
    90: "Praha 10",
    1: "České Budějovice",
    2: "Český Krumlov",
    3: "Jindřichův Hradec",
    4: "Písek",
    5: "Prachatice",
    6: "Strakonice",
    7: "Tábor",
    71: "Blansko",
    74: "Břeclav",
    72: "Brno-město",
    73: "Brno-venkov",
    75: "Hodonín",
    76: "Vyškov",
    77: "Znojmo",
    9: "Cheb",
    10: "Karlovy Vary",
    16: "Sokolov",
    28: "Hradec Králové",
    30: "Jičín",
    31: "Náchod",
    33: "Rychnov nad Kněžnou",
    36: "Trutnov",
    18: "Česká Lípa",
    21: "Jablonec nad Nisou",
    22: "Liberec",
    34: "Semily",
    60: "Bruntál",
    61: "Frýdek-Místek",
    62: "Karviná",
    63: "Nový Jičín",
    64: "Opava",
    65: "Ostrava-město",
    46: "Jeseník",
    42: "Olomouc",
    43: "Přerov",
    40: "Prostějov",
    44: "Šumperk",
    29: "Chrudim",
    32: "Pardubice",
    35: "Svitavy",
    37: "Ústí nad Orlicí",
    8: "Domažlice",
    11: "Klatovy",
    13: "Plzeň-jih",
    12: "Plzeň-město",
    14: "Plzeň-sever",
    15: "Rokycany",
    17: "Tachov",
    48: "Benešov",
    49: "Beroun",
    50: "Kladno",
    51: "Kolín",
    52: "Kutná Hora",
    54: "Mělník",
    53: "Mladá Boleslav",
    55: "Nymburk",
    58: "Příbram",
    59: "Rakovník",
    20: "Chomutov",
    19: "Děčín",
    23: "Litoměřice",
    24: "Louny",
    25: "Most",
    26: "Teplice",
    27: "Ústí nad Labem",
    66: "Havlíčkův Brod",
    67: "Jihlava",
    68: "Pelhřimov",
    69: "Třebíč",
    70: "Žďár nad Sázavou",
    39: "Kroměříž",
    41: "Uherské Hradiště",
    45: "Vsetín",
    38: "Zlín",
  };

  const conditions = {
    1: "Velmi dobrý",
    2: "Dobrý",
    3: "Špatný",
    4: "Ve výstavbě",
    5: "Developerské projekty",
    6: "Novostavba",
    7: "K demolici",
    8: "Před rekonstrukcí",
    9: "Po rekonstrukci",
  };

  const [lat, setLat] = useState(undefined);
  const [lon, setLon] = useState(undefined);
  const [usableArea, setUsableArea] = useState(0);
  const [landArea, setLandArea] = useState(0);
  const [garage, setGarage] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [cellar, setCellar] = useState(false);
  const [parkingLots, setParkingLots] = useState(false);
  const [reconstructed, setReconstructed] = useState(false);
  const [region, setRegion] = useState(undefined);
  const [district, setDistrict] = useState(undefined);
  const [roomCount, setRoomCount] = useState(0);
  const [condition, setCondition] = useState(undefined);

  return (
    <div className='container'>
    <TextField id="usable_area" label="Usable area" type="number" variant="filled" value={usableArea} onChange={(e) =>{e.target.value<0?0: setUsableArea(parseInt(e.target.value))}}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />

    <TextField id="land_area" label="Land area" type="number" variant="filled" value={landArea} onChange={(e) =>{e.target.value<0?0: setLandArea(parseInt(e.target.value))}}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
    <FormGroup>
      <FormControlLabel id="garage" control={<Checkbox onChange={() => {setGarage(g => !g )}}/>} label="Garage" />
      <FormControlLabel id="new" control={<Checkbox onChange={() => {setIsNew(n => !n )}}/>} label="New" />
      <FormControlLabel id="furnished" control={<Checkbox onChange={() => {setFurnished(f => !f )}}/>} label="Furnished" />
      <FormControlLabel id="cellar" control={<Checkbox onChange={() => {setCellar(c => !c )}}/>} label="Cellar" />
      <FormControlLabel id="parkingLots" control={<Checkbox onChange={() => {setParkingLots(p => !p )}}/>} label="Parking Lots" />
      <FormControlLabel id="reconstructed" control={<Checkbox onChange={() => {setReconstructed(r => !r )}}/>} label="Reconstructed" />
    </FormGroup>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Region</InputLabel>
      <Select labelId="demo-simple-select-autowidth-label" id="region" autoWidth label="Region" onChange={(e) =>{setRegion(parseInt(e.target.value))}}>
        {Object.entries(regions).map(([id, name]) => (
          <MenuItem key={id} value={id}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-autowidth-label">District</InputLabel>
      <Select labelId="demo-simple-select-autowidth-label" id="district" autoWidth label="District" onChange={(e) =>{setDistrict(parseInt(e.target.value))}}>
        {Object.entries(districts).map(([id, name]) => (
          <MenuItem key={id} value={id}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
    <TextField id="room_count" label="Room count" type="number" variant="filled" value={roomCount} onChange={(e) =>{e.target.value<0?0: setRoomCount(parseInt(e.target.value))}}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Condition</InputLabel>
      <Select labelId="demo-simple-select-autowidth-label" id="condition" autoWidth label="Condition" onChange={(e) =>{setCondition(parseInt(e.target.value))}}>
        {Object.entries(conditions).map(([id, name]) => (
          <MenuItem key={id} value={id}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
    <Button variant="contained" onClick={() =>{console.log({ lat, lon, usableArea, landArea, garage, isNew, furnished, cellar, parkingLots, reconstructed, region, district, roomCount, condition })}}>Predict</Button>
    </div>
  )
}

export default App
