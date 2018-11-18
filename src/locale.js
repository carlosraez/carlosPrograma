import moment from 'moment'

moment.locale('es', {
months : 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
monthsShort : 'Ene._Febr._Mar_Abr._May_Jun_Jul._Agos._Sept._Oct._Novi._Dic.'.split('_'),
monthsParseExact : true,
weekdays : 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
weekdaysShort : 'dom._lun._mar._mir._ju._vie._sab.'.split('_'),
weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
weekdaysParseExact : true,
longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd D MMMM YYYY HH:mm'
},
})
