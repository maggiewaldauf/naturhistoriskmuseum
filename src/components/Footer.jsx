import NewsletterForm from "./NewsletterForm";

export default function Footer() {

    return (
        <footer>
            <div>
                <h4>Naturhistorisk Museum</h4>
                <p>Wilhelm Meyers Allé 10<br></br>8000 Aarhus C<br></br>Tlf.: 86 12 97 77<br></br>nm@nathist.dk<br></br>CVR: 29073910</p>
            </div>
            <div>
                <h4>Molslaboratoriet</h4>
                <p>Strandkærvej 6, Femmøller<br></br>8400 Ebeltoft<br></br>Tlf.: 86 36 25 35 eller 86 12 97 77<br></br>molslab@molslab.dk</p>
            </div>
            <div>
                <h4>Follow us here:</h4>
                <p>*SoMe Icons*</p>
            </div>
            <div>
                <h4>Subscribe to our newsletter:</h4>
                <NewsletterForm />
            </div>
        </footer>
    )
}