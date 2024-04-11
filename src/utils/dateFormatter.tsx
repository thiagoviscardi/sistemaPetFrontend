const dateFormatter = (date:any) => {
    const datenotFormatted= date
    var expressaoRegular = /(\d{4})-(\d{2})-(\d{2}).*/;

    var dataFormatada = datenotFormatted.replace(expressaoRegular, '$1/$2/$3');
    return dataFormatada
}

export default dateFormatter