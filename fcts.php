
<?php
/**
* Ce fichier répertorie quelques fonctions php plus ou moins utiles.
*
* @author Bardaine Cédric
* @version 1.1 Changement de nom.
* @version 1.0
*/

/**
* Affichage plus visuel d'une Array
* @param  [type] $val l'array à afficher
*/
function print_r2($val){
    echo '<pre>';
    print_r($val);
    echo  '</pre>';
}





/**
* Affiche des informations utiles lors d'erreurs d'envoie de fichier sur le serveur
* @param  String $leFile la variable qui reference le fichier
*/
function displayErrorUploadedFile($leFile) {
    $message = 'Error uploading file';
    switch( $_FILES["$leFile"]['error'] ) {
        case UPLOAD_ERR_OK:
        $message = false;;
        break;
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
        $message .= ' - file too large (limit of '.get_max_upload().' bytes).';
        break;
        case UPLOAD_ERR_PARTIAL:
        $message .= ' - file upload was not completed.';
        break;
        case UPLOAD_ERR_NO_FILE:
        $message .= ' - zero-length file uploaded.';
        break;
        default:
        $message .= ' - internal error #'.$_FILES["$leFile"]['error'];
        break;
    }
    if( !$message ) {
        if( !is_uploaded_file($_FILES["$leFile"]['tmp_name']) ) {
            $message = 'Error uploading file - unknown error.';
        } else {
            // Let's see if we can move the file...
            $dest .= '/'.$this_file;
            if( !move_uploaded_file($_FILES["$leFile"]['tmp_name'], $dest) ) { // No error supporession so we can see the underlying error.
                $message = 'Error uploading file - could not save upload (this will probably be a permissions problem in '.$dest.')';
            } else {
                $message = 'File uploaded okay.';
            }
        }
    }
}





/**
* Parse un site distant grace à son URL pour récupérer les liens complets
* vers ses feuilles de style.
* @param  String $url L'URL du site
* @return Array   Les liens vers les stylesheets.
* @author Bardaine Cédric
*/
function getOnlyStylesheet($url)  {
    $fp  = fopen( $url , 'r' ) ;
    $stylesheetS[] = '';
    $arrayBoutsDURL = explode("/" , $url) ;
    $racinedusite = $arrayBoutsDURL['2'] ;
    $arrayBoutsDeLigne1[] = '' ;

    while (!feof($fp)) {
        $laligne = fgets($fp)  ;

        if (strpos($laligne, 'rel="stylesheet"') !== false) {
            $arrayBoutsDeLigne1 = explode('href="' , $laligne ) ; // permet de bien séparer en fonction du lien vers la ressource externe
            $presquelecss = $arrayBoutsDeLigne1['1'] ;
            $arrayBoutsDeLigne2 = explode('"' , $presquelecss ) ;
            $leCSS = $arrayBoutsDeLigne2['0'] ;

            array_push($stylesheetS , $racinedusite.$leCSS) ;
        }
    }
    fclose($rh);

    return $stylesheetS ;
}

/**
* Parse un site avec son url pour récupérer les tags, ou les attributs,
* dans le cas présent : les sources de images.
* Cela utilise l'objet DOMDocument.
* @param  String $urlwebsite url du site web
* @return Array             Toutes les urls
*/
function getImgsArray( $urlwebsite ) {
    //parsing begins here:
    $doc = new DOMDocument();
    @$doc->loadHTMLFile($urlwebsite);

    //get and display what you need:
    print_r2( $doc) ;

    $imgs = $doc->getElementsByTagName('img');
    print_r2($imgs) ;

    $arrayIMGS = [] ;
    for ($i = 0 ; $i < $imgs->length; $i++) {
        $img = $imgs->item($i);
        $img = $img->getAttribute('src') ;
        if( strpos($img, 'http' ) !== false )
        array_push($arrayIMGS , $img) ;
    }

    return $arrayIMGS ;
}





// voir SimpleHtmlDomParser 
// pour tout ce qui est get et modification de HTML 
// https://simplehtmldom.sourceforge.io/






?>
<?php
// autres informations
// get_defined_vars() permet d'afficher toutes les variablesdéfinies dans le script
//
?>
