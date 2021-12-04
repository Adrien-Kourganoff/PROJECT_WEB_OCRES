import React, {Component} from "react";

class Parametres extends Component {

    setMeteo = () => {
        this.props.updateMeteo(document.getElementById("city_input").value);
    }

    setNasa = () => {
        let date = document.getElementById("nasa_input").value;
        alert(date);

        this.props.updateNasa({
            day: "" + date[8]+date[9],
            month: "" + date[5]+date[6],
            year: "" + date[0]+date[1]+date[2]+date[3],
        });
    }

    setRates = () => {
        this.props.updateRates({
            base: document.getElementById("base_currency").value,
            change: document.getElementById("change_currency").value,
        });
    }

    setFilms = () => {
        
    }

    setShopping = () => {
        this.props.updateShopping({
            brand: document.getElementById("brand_selection").value,
        });
    }

    render(){
        return(
            <div className="Parametres">
                <div className="parametres_meteo">
                    <h3>Meteo settings</h3>
                    <input id = "city_input" placeholder = "change city here"/>
                    <button onClick = {this.setMeteo}>update</button>
                </div>
                <div className="parametres_nasa">
                <h3>Date of nasa picture settings</h3>
                    <input id = "nasa_input"  type = "date"/>
                    <button onClick = {this.setNasa}>update</button>
                </div>
                <div className="parametres_rates">
                    <h3>Currency change settings</h3>
                    <label for="from">From:</label>
                    <select id="base_currency" name="from">
                        <option value="THB">Baht thaïlandais</option>
                        <option value="DKK">Couronne danoise</option>
                        <option value="NOK">Couronne norvégienne</option>
                        <option value="SEK">Couronne suédoise</option>
                        <option value="CZK">Couronne tchèque</option>
                        <option value="AUD">Dollar australien</option>
                        <option value="CAD">Dollar canadien</option>
                        <option value="HKD">Dollar de Hong Kong</option>
                        <option value="SGD">Dollar de Singapour</option>
                        <option value="USD">Dollar des États-Unis</option>
                        <option value="NZD">Dollar néo-zélandais</option>
                        <option value="EUR" selected >Euro</option>
                        <option value="HUF">Forint hongrois</option>
                        <option value="CHF">Franc suisse</option>
                        <option value="HRK">Kuna croate</option>
                        <option value="RON">Leu roumain</option>
                        <option value="BGN">Lev bulgare</option>
                        <option value="TRY">Livre turque</option>
                        <option value="GBP">Livre sterling</option>
                        <option value="MXN">Peso mexicain</option>
                        <option value="PHP">Peso philippin</option>
                        <option value="ZAR">Rand sud-africain</option>
                        <option value="BRL">Real brésilien</option>
                        <option value="MYR">Ringgit malaisien</option>
                        <option value="RUB">Rouble russe</option>
                        <option value="INR">Roupie indienne</option>
                        <option value="IDR">Roupie indonésienne</option>
                        <option value="ILS">Sheqel israëlien</option>
                        <option value="JPY">Yen japonais</option>
                        <option value="CNY">Yuan renminbi chinois</option>
                        <option value="KRW">Won coréen</option>
                        <option value="PLN">Zloty polonais</option>
                    </select>

                    <label for="to"> to:</label>
                    <select id="change_currency" name="to">
                    <option value="THB">Baht thaïlandais</option>
                        <option value="DKK">Couronne danoise</option>
                        <option value="NOK">Couronne norvégienne</option>
                        <option value="SEK">Couronne suédoise</option>
                        <option value="CZK">Couronne tchèque</option>
                        <option value="AUD">Dollar australien</option>
                        <option value="CAD">Dollar canadien</option>
                        <option value="HKD">Dollar de Hong Kong</option>
                        <option value="SGD">Dollar de Singapour</option>
                        <option value="USD"selected>Dollar des États-Unis</option>
                        <option value="NZD">Dollar néo-zélandais</option>
                        <option value="EUR">Euro</option>
                        <option value="HUF">Forint hongrois</option>
                        <option value="CHF">Franc suisse</option>
                        <option value="HRK">Kuna croate</option>
                        <option value="RON">Leu roumain</option>
                        <option value="BGN">Lev bulgare</option>
                        <option value="TRY">Livre turque</option>
                        <option value="GBP">Livre sterling</option>
                        <option value="MXN">Peso mexicain</option>
                        <option value="PHP">Peso philippin</option>
                        <option value="ZAR">Rand sud-africain</option>
                        <option value="BRL">Real brésilien</option>
                        <option value="MYR">Ringgit malaisien</option>
                        <option value="RUB">Rouble russe</option>
                        <option value="INR">Roupie indienne</option>
                        <option value="IDR">Roupie indonésienne</option>
                        <option value="ILS">Sheqel israëlien</option>
                        <option value="JPY">Yen japonais</option>
                        <option value="CNY">Yuan renminbi chinois</option>
                        <option value="KRW">Won coréen</option>
                        <option value="PLN">Zloty polonais</option>
                    </select>
                    <button onClick = {this.setRates}>update</button>
                </div>
                <div className="parametres_films">
                </div>
                <div className="parametres_shopping">
                    <h3>Makeup search settings</h3>
                    <select id="brand_selection">
                        <option value="almay">almay</option>
                        <option value="alva" selected >alva</option>
                        <option value="anna sui">anna sui</option>
                        <option value="annabelle">annabelle</option>
                        <option value="benefit">benefit</option>
                        <option value="boosh">boosh</option>
                        <option value="burt's bees">burt's bees</option>
                        <option value="butter london">butter london</option>
                        <option value="c'est moi">c'est moi</option>
                        <option value="cargo cosmetics">cargo cosmetics</option>
                        <option value="china glaze">china glaze</option>
                        <option value="clinique">clinique</option>
                        <option value="coastal classic creation">coastal classic creation</option>
                        <option value="colourpop">colourpop</option>
                        <option value="covergirl">covergirl</option>
                        <option value="dalish">dalish</option>
                        <option value="deciem">deciem</option>
                        <option value="dior">dior</option>
                        <option value="dr. hauschka">dr. hauschka</option>
                        <option value="e.l.f.">e.l.f.</option>
                        <option value="essie">essie</option>
                        <option value="fenty">fenty</option>
                        <option value="glossier">glossier</option>
                        <option value="green people">green people</option>
                        <option value="iman">iman</option>
                        <option value="l'oreal">l'oreal</option>
                        <option value="lotus cosmetics usa">lotus cosmetics usa</option>
                        <option value="maia's mineral galaxy">maia's mineral galaxy</option>
                        <option value="marcelle">marcelle</option>
                        <option value="marienatie">marienatie</option>
                        <option value="maybelline">maybelline</option>
                        <option value="milani">milani</option>
                        <option value="mineral fusion">mineral fusion</option>
                        <option value="misa">misa</option>
                        <option value="mistura<">mistura</option>
                        <option value="moov">moov</option>
                        <option value="nudus">nudus</option>
                        <option value="nyx">nyx</option>
                        <option value="orly">orly</option>
                        <option value="pacifica">pacifica</option>
                        <option value="penny lane organics">penny lane organics</option>
                        <option value="physicians formula">physicians formula</option>
                        <option value="piggy paint">piggy paint</option>
                        <option value="pure anada">pure anada</option>
                        <option value="rejuva minerals">rejuva minerals</option>
                        <option value="revlon">revlon</option>
                        <option value="sally b's skin yummies">sally b's skin yummies</option>
                        <option value="salon perfect">salon perfect</option>
                        <option value="sante">sante</option>
                        <option value="sinful colours">sinful colours</option>
                        <option value="smashbox">smashbox</option>
                        <option value="stila">stila</option>
                        <option value="suncoat">suncoat</option>
                        <option value="w3llpeople">w3llpeople</option>
                        <option value="wet n wild">wet n wild</option>
                        <option value="zorah">zorah</option>
                        <option value="zorah biocosmetiques">zorah biocosmetiques</option>
                    </select>
                    <button onClick = {this.setShopping}>update</button>
                </div>
            </div>
        );
    }    
}

export default Parametres;