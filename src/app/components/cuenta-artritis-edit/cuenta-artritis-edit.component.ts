import { Component, OnInit } from '@angular/core';
import { HemofiliaService } from 'src/app/services/hemofilia/hemofilia.service';
import { OpcionesListaService } from 'src/app/services/opcionesLista/opciones-lista.service';
import { CACArtritisService } from 'src/app/services/CAC-Artritis/cac-artritis.service'
import { ARTRITIS } from '../../models/artritis'
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import {LogsErroresArtritisService} from 'src/app/services/logsErroresArtritis/logs-errores-artritis.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta-artritis-edit',
  templateUrl: './cuenta-artritis-edit.component.html',
  styleUrls: ['./cuenta-artritis-edit.component.css']
})
export class CuentaArtritisEditComponent implements OnInit {
  validacionRegistro = false
  Artritislist
  horas: any
  minutos: any
  tipodocumento: any
  Sexo: any
  RegimenAF: any
  CEtnica: any
  C2_CAMPO_3
  C21_CAMPO_22
  C22_CAMPO_23
  C25_CAMPO_26
  C30_CAMPO_31
  C31_CAMPO_32
  C32_CAMPO_33
  C33_CAMPO_34
  C34_CAMPO_35
  C35_CAMPO_36
  C36_CAMPO_37
  C37_CAMPO_38
  C38_CAMPO_39
  C40_CAMPO_41
  C45_CAMPO_45_2
  C46_CAMPO_45_3
  C46_CAMPO_45_4
  C46_CAMPO_45_5
  C50_CAMPO_45_7
  C51_CAMPO_45_8
  C52_CAMPO_46_1
  C53_CAMPO_46_2
  C54_CAMPO_46_3
  C55_CAMPO_46_4
  C56_CAMPO_46_5
  C57_CAMPO_46_6
  C58_CAMPO_46_7
  C59_CAMPO_46_8
  C60_CAMPO_46_9
  C61_CAMPO_46_10
  C62_CAMPO_47_1
  C63_CAMPO_47_2
  C64_CAMPO_47_3
  C65_CAMPO_47_4
  C66_CAMPO_47_5
  C67_CAMPO_47_6
  C68_CAMPO_47_7
  C69_CAMPO_47_8
  C70_CAMPO_47_9
  C71_CAMPO_47_10
  C77_CAMPO_49
  C78_CAMPO_50
  C85_CAMPO_57
  C86_CAMPO_58
  C87_CAMPO_59
  C88_CAMPO_60
  C89_CAMPO_61
  C90_CAMPO_62
  C91_CAMPO_63
  C92_CAMPO_64
  C94_CAMPO_66
  C96_CAMPO_68
  C99_CAMPO_71_1
  C100_CAMPO_71_2
  C101_CAMPO_71_3
  C102_CAMPO_71_4
  C104_CAMPO_71_6
  C105_CAMPO_71_7
  C107_CAMPO_73_1
  C108_CAMPO_73_2
  C109_CAMPO_73_3
  C110_CAMPO_73_4
  C111_CAMPO_73_5
  C112_CAMPO_73_6
  C113_CAMPO_73_7
  C114_CAMPO_73_8
  C115_CAMPO_73_9
  C116_CAMPO_73_10
  C117_CAMPO_74_1
  C118_CAMPO_74_2
  C119_CAMPO_74_3
  C120_CAMPO_74_4
  C121_CAMPO_74_5
  C122_CAMPO_74_6
  C123_CAMPO_74_7
  C124_CAMPO_74_8
  C125_CAMPO_74_9
  C126_CAMPO_74_10
  C134_CAMPO_75_4
  C135_CAMPO_75_5
  C136_CAMPO_75_6
  C137_CAMPO_75_7
  C142_CAMPO_80
  C143_CAMPO_81
  C147_CAMPO_85

  ARTRITIS: ARTRITIS = {
    CAMPO_1: '',
    CAMPO_2: '',
    CAMPO_3: '',
    CAMPO_4: '',
    CAMPO_5: '',
    CAMPO_6: '',
    CAMPO_7: '',
    CAMPO_8: '',
    CAMPO_9: '',
    CAMPO_10: '',
    CAMPO_11: '',
    CAMPO_12: '',
    CAMPO_13: '',
    CAMPO_14: '',
    CAMPO_15: '',
    CAMPO_16: '',
    CAMPO_17: '',
    CAMPO_18: '',
    CAMPO_19: '',
    CAMPO_20: '',
    CAMPO_21: '',
    CAMPO_22: '',
    CAMPO_23: '',
    CAMPO_24: '',
    CAMPO_25: '',
    CAMPO_26: '',
    CAMPO_27: '',
    CAMPO_28: '',
    CAMPO_29: '',
    CAMPO_30: '',
    CAMPO_31: '',
    CAMPO_32: '',
    CAMPO_33: '',
    CAMPO_34: '',
    CAMPO_35: '',
    CAMPO_36: '',
    CAMPO_37: '',
    CAMPO_38: '',
    CAMPO_39: '',
    CAMPO_40: '',
    CAMPO_41: '',
    CAMPO_42: '',
    CAMPO_43: '',
    CAMPO_44: '',
    CAMPO_45_1: '',
    CAMPO_45_2: '',
    CAMPO_45_3: '',
    CAMPO_45_4: '',
    CAMPO_45_5: '',
    CAMPO_45_6: '',
    CAMPO_45_7: '',
    CAMPO_45_8: '',
    CAMPO_46_1: '',
    CAMPO_46_2: '',
    CAMPO_46_3: '',
    CAMPO_46_4: '',
    CAMPO_46_5: '',
    CAMPO_46_6: '',
    CAMPO_46_7: '',
    CAMPO_46_8: '',
    CAMPO_46_9: '',
    CAMPO_46_10: '',
    CAMPO_47_1: '',
    CAMPO_47_2: '',
    CAMPO_47_3: '',
    CAMPO_47_4: '',
    CAMPO_47_5: '',
    CAMPO_47_6: '',
    CAMPO_47_7: '',
    CAMPO_47_8: '',
    CAMPO_47_9: '',
    CAMPO_47_10: '',
    CAMPO_47_11: '',
    CAMPO_47_12: '',
    CAMPO_47_13: '',
    CAMPO_47_14: '',
    CAMPO_48: '',
    CAMPO_49: '',
    CAMPO_50: '',
    CAMPO_51: '',
    CAMPO_52: '',
    CAMPO_53: '',
    CAMPO_54: '',
    CAMPO_55: '',
    CAMPO_56: '',
    CAMPO_57: '',
    CAMPO_58: '',
    CAMPO_59: '',
    CAMPO_60: '',
    CAMPO_61: '',
    CAMPO_62: '',
    CAMPO_63: '',
    CAMPO_64: '',
    CAMPO_65: '',
    CAMPO_66: '',
    CAMPO_67: '',
    CAMPO_68: '',
    CAMPO_69: '',
    CAMPO_70: '',
    CAMPO_71_1: '',
    CAMPO_71_2: '',
    CAMPO_71_3: '',
    CAMPO_71_4: '',
    CAMPO_71_5: '',
    CAMPO_71_6: '',
    CAMPO_71_7: '',
    CAMPO_72: '',
    CAMPO_73_1: '',
    CAMPO_73_2: '',
    CAMPO_73_3: '',
    CAMPO_73_4: '',
    CAMPO_73_5: '',
    CAMPO_73_6: '',
    CAMPO_73_7: '',
    CAMPO_73_8: '',
    CAMPO_73_9: '',
    CAMPO_73_10: '',
    CAMPO_74_1: '',
    CAMPO_74_2: '',
    CAMPO_74_3: '',
    CAMPO_74_4: '',
    CAMPO_74_5: '',
    CAMPO_74_6: '',
    CAMPO_74_7: '',
    CAMPO_74_8: '',
    CAMPO_74_9: '',
    CAMPO_74_10: '',
    CAMPO_74_11: '',
    CAMPO_74_12: '',
    CAMPO_74_13: '',
    CAMPO_74_14: '',
    CAMPO_75_1: '',
    CAMPO_75_2: '',
    CAMPO_75_3: '',
    CAMPO_75_4: '',
    CAMPO_75_5: '',
    CAMPO_75_6: '',
    CAMPO_75_7: '',
    CAMPO_76: '',
    CAMPO_77: '',
    CAMPO_78: '',
    CAMPO_79: '',
    CAMPO_80: '',
    CAMPO_81: '',
    CAMPO_82: '',
    CAMPO_83: '',
    CAMPO_84: '',
    CAMPO_85: '',
    CAMPO_86: '',
    CAMPO_87: '',
    CAMPO_88: '',
    CAMPO_89: '',
    CAMPO_90: '',
    CAMPO_91: ''
  }
  artritis
  private CC;

  isReadonly = true;
  constructor(private hemofiliaservice: HemofiliaService, activateRoute: ActivatedRoute, private LogsErroresArtritisService:LogsErroresArtritisService,
    config: NgbModalConfig, private modalService: NgbModal, public tabs: AppComponent, private opcionesListaService: OpcionesListaService, private Artritisservice: CACArtritisService) {
    this.CC = activateRoute.snapshot.params['cc']; config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.Funcionesdecarga();
  }

  Funcionesdecarga() {
    this.consultarDatos()
    this.Cargartipodocumento();
    this.CargarSexo();
    this.CargarRegimenafiliacion();
    this.CargarcodigoPertenenciaetnica();
    this.cargarGrupoPoblacional3();
    this.cargarRadiografiaManosDiagn??stico22();
    this.cargarRadiografiaPiesDiagn??stico23();
    this.cargarFactorReumatoideoInicial26();
    this.cargarParcialOrinaInicial31();
    this.cargarALTInicial32();
    this.AntiCCPDiagn??stico33();
    this.cargarHTADiagn??stico34();
    this.DMDiagn??stico35();
    this.cargarECVDiagn??stico36();
    this.cargarERCDiagn??stico37();
    this.cargarOsteoporosisDiagn??stico38();
    this.cargarSindromeSjogrenDiagn??stico39();
    this.cargarProfesionalRealiz??PrimerDAS2841();
    this.cargarAnalgesicosNoOpioidesInicio45_2();
    this.cargarAnalgesicosInicio145_3();
    this.cargarAINESinicio45_4();
    this.cargarCorticoidesInicio45_5();
    this.cargarTamizajeTBantesinicioDMARD145_7();
    this.cargarAntecedentelinfomaantesinicioDMARD45_8();
    this.cargarAzatioprina46_1();
    this.cargarCiclosporina46_2();
    this.cargarCiclofosfamida46_3();
    this.cargarCloroquina46_4();
    this.cargarDpenicilaimina46_5();
    this.cargarEtanercept46_6();
    this.cargarLeflunomida46_7();
    this.cargarMetotrexate46_8();
    this.cargarRituximab46_9();
    this.cargarSulfasalazina46_10();
    this.cargarAbatacept47_1();
    this.cargarAdalimumab_47_2();
    this.cargarCertolizumab47_3();
    this.cargarGolimumab47_4();
    this.cargarHidroxicloroquina47_5();
    this.cargarInfliximab47_6();
    this.cargarSalesdeoro47_7();
    this.cargarTocilizumab47_8();
    this.cargarTofacitinib47_9();
    this.cargarAnakinra47_10();
    this.cargarRadiografiademanos49()
    this.cargarRadiografiadepies50()
    this.cargarParcialdeOrina??ltimosemestre57()
    this.cargarALTultimosemestre58()
    this.cargarHTAactual59()
    this.cargarDMactua60()
    this.cargarECVactual61()
    this.cargarERCactual62()
    this.cargarOsteoporosisactual63()
    this.cargarSindromeSjogrenactual64()
    this.cargarProfesionalrealizoultimoDAS28_66()
    this.cargarEstadoactividadactualdelaAReg??nDAS28_68()
    this.cargarAnalgesicosNoOpioides71_1()
    this.cargarAnalgesicosOpioides71_2()
    this.cargarAINES71_3()
    this.cargarCorticoides71_4()
    this.cargarCalcio71_6()
    this.cargarVitaminaD71_7()
    this.cargarAzatioprina73_1()
    this.cargarCiclosporina73_2()
    this.cargarCiclofosfamida73_3()
    this.cargarCorticoides73_4()
    this.cargarDpenicilaimina73_5()
    this.cargarEtanercept73_6()
    this.cargarLeflunomida73_7()
    this.cargarMetotrexate73_8()
    this.cargarRituximab73_9()
    this.cargarSulfasalazina73_10()
    this.cargarAbatacept74_1()
    this.cargarAdalimumab74_2()
    this.cargarCertolizumab74_3()
    this.cargarGolimumab74_4()
    this.cargaHidroxicloroquina74_5()
    this.cargarInfliximab74_6()
    this.cargarSalesdeoro74_7()
    this.cargarTocilizumab74_8()
    this.cargarTofacitinib74_9()
    this.cargarAnakinra74_10()
    this.cargarReemplazoarticular1porAR575_4()
    this.cargarReemplazoarticular2porAR75_5()
    this.cargarReemplazoarticular3porAR75_6()
    this.cargarReemplazoarticula4porAR75_7()
    this.cargarQuienhacelaatencionclinicaparaAR80()
    this.cargarNovedaddelpacienterespectoalreporteanterior81()
    this.cargarCausademuerte85()
  }

  consultarDatos() {
    this.Artritisservice.getOne(this.CC).subscribe(res => {
      this.artritis = res;
      console.log(this.artritis)
    })
  }




  Cargartipodocumento() {
    this.hemofiliaservice.CargarTipodocumento().subscribe(res => {
      this.tipodocumento = res;
    })
  }

  CargarSexo() {
    this.hemofiliaservice.CargarSexo().subscribe(res => {
      this.Sexo = res;
    })
  }

  CargarRegimenafiliacion() {
    this.hemofiliaservice.CargarRegimenAfiliacion().subscribe(res => {
      this.RegimenAF = res;
    })
  }

  CargarcodigoPertenenciaetnica() {
    this.hemofiliaservice.CargarcodigoPertenenciaetnica().subscribe(res => {
      this.CEtnica = res;
    })
  }

  cargarGrupoPoblacional3() {
    this.opcionesListaService.cargarGrupoPoblacional3().subscribe(res => {
      this.C2_CAMPO_3 = res;
    })
  }
  cargarRadiografiaManosDiagn??stico22() {
    this.opcionesListaService.cargarRadiografiaManosDiagn??stico22().subscribe(res => {
      this.C21_CAMPO_22 = res;
    })
  }
  cargarRadiografiaPiesDiagn??stico23() {
    this.opcionesListaService.cargarRadiografiaPiesDiagn??stico23().subscribe(res => {
      this.C22_CAMPO_23 = res;
    })
  }
  cargarFactorReumatoideoInicial26() {
    this.opcionesListaService.cargarFactorReumatoideoInicial26().subscribe(res => {
      this.C25_CAMPO_26 = res;
    })
  }
  cargarParcialOrinaInicial31() {
    this.opcionesListaService.cargarParcialOrinaInicial31().subscribe(res => {
      this.C30_CAMPO_31 = res;
    })
  }
  cargarALTInicial32() {
    this.opcionesListaService.cargarALTInicial32().subscribe(res => {
      this.C31_CAMPO_32 = res;
    })
  }
  AntiCCPDiagn??stico33() {
    this.opcionesListaService.AntiCCPDiagn??stico33().subscribe(res => {
      this.C32_CAMPO_33 = res;
    })
  }
  cargarHTADiagn??stico34() {
    this.opcionesListaService.cargarHTADiagn??stico34().subscribe(res => {
      this.C33_CAMPO_34 = res;
    })
  }
  DMDiagn??stico35() {
    this.opcionesListaService.DMDiagn??stico35().subscribe(res => {
      this.C34_CAMPO_35 = res;
    })
  }
  cargarECVDiagn??stico36() {
    this.opcionesListaService.cargarECVDiagn??stico36().subscribe(res => {
      this.C35_CAMPO_36 = res;
    })
  }
  cargarERCDiagn??stico37() {
    this.opcionesListaService.cargarERCDiagn??stico37().subscribe(res => {
      this.C36_CAMPO_37 = res;
    })
  }
  cargarOsteoporosisDiagn??stico38() {
    this.opcionesListaService.cargarOsteoporosisDiagn??stico38().subscribe(res => {
      this.C37_CAMPO_38 = res;
    })
  }
  cargarSindromeSjogrenDiagn??stico39() {
    this.opcionesListaService.cargarSindromeSjogrenDiagn??stico39().subscribe(res => {
      this.C38_CAMPO_39 = res;
    })
  }
  cargarProfesionalRealiz??PrimerDAS2841() {
    this.opcionesListaService.cargarProfesionalRealiz??PrimerDAS2841().subscribe(res => {
      this.C40_CAMPO_41 = res;
    })
  }
  cargarAnalgesicosNoOpioidesInicio45_2() {
    this.opcionesListaService.cargarAnalgesicosNoOpioidesInicio45_2().subscribe(res => {
      this.C45_CAMPO_45_2 = res;
    })
  }
  cargarAnalgesicosInicio145_3() {
    this.opcionesListaService.cargarAnalgesicosInicio145_3().subscribe(res => {
      this.C46_CAMPO_45_3 = res;
    })
  }
  cargarAINESinicio45_4() {
    this.opcionesListaService.cargarAINESinicio45_4().subscribe(res => {
      this.C46_CAMPO_45_4 = res;
    })
  }
  cargarCorticoidesInicio45_5() {
    this.opcionesListaService.cargarCorticoidesInicio45_5().subscribe(res => {
      this.C46_CAMPO_45_5 = res;
    })
  }
  cargarTamizajeTBantesinicioDMARD145_7() {
    this.opcionesListaService.cargarTamizajeTBantesinicioDMARD145_7().subscribe(res => {
      this.C50_CAMPO_45_7 = res;
    })
  }
  cargarAntecedentelinfomaantesinicioDMARD45_8() {
    this.opcionesListaService.cargarAntecedentelinfomaantesinicioDMARD45_8().subscribe(res => {
      this.C51_CAMPO_45_8 = res;
    })
  }
  cargarAzatioprina46_1() {
    this.opcionesListaService.cargarAzatioprina46_1().subscribe(res => {
      this.C52_CAMPO_46_1 = res;
    })
  }
  cargarCiclosporina46_2() {
    this.opcionesListaService.cargarCiclosporina46_2().subscribe(res => {
      this.C53_CAMPO_46_2 = res;
    })
  }
  cargarCiclofosfamida46_3() {
    this.opcionesListaService.cargarCiclofosfamida46_3().subscribe(res => {
      this.C54_CAMPO_46_3 = res;
    })
  }
  cargarCloroquina46_4() {
    this.opcionesListaService.cargarCloroquina46_4().subscribe(res => {
      this.C55_CAMPO_46_4 = res;
    })
  }
  cargarDpenicilaimina46_5() {
    this.opcionesListaService.cargarDpenicilaimina46_5().subscribe(res => {
      this.C56_CAMPO_46_5 = res;
    })
  }
  cargarEtanercept46_6() {
    this.opcionesListaService.cargarEtanercept46_6().subscribe(res => {
      this.C57_CAMPO_46_6 = res;
    })
  }
  cargarLeflunomida46_7() {
    this.opcionesListaService.cargarLeflunomida46_7().subscribe(res => {
      this.C58_CAMPO_46_7 = res;
    })
  }
  cargarMetotrexate46_8() {
    this.opcionesListaService.cargarMetotrexate46_8().subscribe(res => {
      this.C59_CAMPO_46_8 = res;
    })
  }
  cargarRituximab46_9() {
    this.opcionesListaService.cargarRituximab46_9().subscribe(res => {
      this.C60_CAMPO_46_9 = res;
    })
  }
  cargarSulfasalazina46_10() {
    this.opcionesListaService.cargarSulfasalazina46_10().subscribe(res => {
      this.C61_CAMPO_46_10 = res;
    })
  }
  cargarAbatacept47_1() {
    this.opcionesListaService.cargarAbatacept47_1().subscribe(res => {
      this.C62_CAMPO_47_1 = res;
    })
  }
  cargarAdalimumab_47_2() {
    this.opcionesListaService.cargarAdalimumab_47_2().subscribe(res => {
      this.C63_CAMPO_47_2 = res;
    })
  }
  cargarCertolizumab47_3() {
    this.opcionesListaService.cargarCertolizumab47_3().subscribe(res => {
      this.C64_CAMPO_47_3 = res;
    })
  }
  cargarGolimumab47_4() {
    this.opcionesListaService.cargarGolimumab47_4().subscribe(res => {
      this.C65_CAMPO_47_4 = res;
    })
  }
  cargarHidroxicloroquina47_5() {
    this.opcionesListaService.cargarHidroxicloroquina47_5().subscribe(res => {
      this.C66_CAMPO_47_5 = res;
    })
  }
  cargarInfliximab47_6() {
    this.opcionesListaService.cargarInfliximab47_6().subscribe(res => {
      this.C67_CAMPO_47_6 = res;
    })
  }
  cargarSalesdeoro47_7() {
    this.opcionesListaService.cargarSalesdeoro47_7().subscribe(res => {
      this.C68_CAMPO_47_7 = res;
    })
  }
  cargarTocilizumab47_8() {
    this.opcionesListaService.cargarTocilizumab47_8().subscribe(res => {
      this.C69_CAMPO_47_8 = res;
    })
  }
  cargarTofacitinib47_9() {
    this.opcionesListaService.cargarTofacitinib47_9().subscribe(res => {
      this.C70_CAMPO_47_9 = res;
    })
  }
  cargarAnakinra47_10() {
    this.opcionesListaService.cargarAnakinra47_10().subscribe(res => {
      this.C71_CAMPO_47_10 = res;
    })
  }

  cargarRadiografiademanos49() {
    this.opcionesListaService.cargarRadiografiademanos49().subscribe(res => {
      this.C77_CAMPO_49 = res;
    })
  }
  cargarRadiografiadepies50() {
    this.opcionesListaService.cargarRadiografiadepies50().subscribe(res => {
      this.C78_CAMPO_50 = res;
    })
  }
  cargarParcialdeOrina??ltimosemestre57() {
    this.opcionesListaService.cargarParcialdeOrina??ltimosemestre57().subscribe(res => {
      this.C85_CAMPO_57 = res;
    })
  }
  cargarALTultimosemestre58() {
    this.opcionesListaService.cargarALTultimosemestre58().subscribe(res => {
      this.C86_CAMPO_58 = res;
    })
  }
  cargarHTAactual59() {
    this.opcionesListaService.cargarHTAactual59().subscribe(res => {
      this.C87_CAMPO_59 = res;
    })
  }
  cargarDMactua60() {
    this.opcionesListaService.cargarDMactua60().subscribe(res => {
      this.C88_CAMPO_60 = res;
    })
  }
  cargarECVactual61() {
    this.opcionesListaService.cargarECVactual61().subscribe(res => {
      this.C89_CAMPO_61 = res;
    })
  }
  cargarERCactual62() {
    this.opcionesListaService.cargarERCactual62().subscribe(res => {
      this.C90_CAMPO_62 = res;
    })
  }
  cargarOsteoporosisactual63() {
    this.opcionesListaService.cargarOsteoporosisactual63().subscribe(res => {
      this.C91_CAMPO_63 = res;
    })
  }
  cargarSindromeSjogrenactual64() {
    this.opcionesListaService.cargarSindromeSjogrenactual64().subscribe(res => {
      this.C92_CAMPO_64 = res;
    })
  }
  cargarProfesionalrealizoultimoDAS28_66() {
    this.opcionesListaService.cargarProfesionalrealizoultimoDAS28_66().subscribe(res => {
      this.C94_CAMPO_66 = res;
    })
  }
  cargarEstadoactividadactualdelaAReg??nDAS28_68() {
    this.opcionesListaService.cargarEstadoactividadactualdelaAReg??nDAS28_68().subscribe(res => {
      this.C96_CAMPO_68 = res;
    })
  }
  cargarAnalgesicosNoOpioides71_1() {
    this.opcionesListaService.cargarAnalgesicosNoOpioides71_1().subscribe(res => {
      this.C99_CAMPO_71_1 = res;
    })
  }
  cargarAnalgesicosOpioides71_2() {
    this.opcionesListaService.cargarAnalgesicosOpioides71_2().subscribe(res => {
      this.C100_CAMPO_71_2 = res;
    })
  }
  cargarAINES71_3() {
    this.opcionesListaService.cargarAINES71_3().subscribe(res => {
      this.C101_CAMPO_71_3 = res;
    })
  }
  cargarCorticoides71_4() {
    this.opcionesListaService.cargarCorticoides71_4().subscribe(res => {
      this.C102_CAMPO_71_4 = res;
    })
  }
  cargarCalcio71_6() {
    this.opcionesListaService.cargarCalcio71_6().subscribe(res => {
      this.C104_CAMPO_71_6 = res;
    })
  }
  cargarVitaminaD71_7() {
    this.opcionesListaService.cargarVitaminaD71_7().subscribe(res => {
      this.C105_CAMPO_71_7 = res;
    })
  }
  cargarAzatioprina73_1() {
    this.opcionesListaService.cargarAzatioprina73_1().subscribe(res => {
      this.C107_CAMPO_73_1 = res;
    })
  }
  cargarCiclosporina73_2() {
    this.opcionesListaService.cargarCiclosporina73_2().subscribe(res => {
      this.C108_CAMPO_73_2 = res;
    })
  }
  cargarCiclofosfamida73_3() {
    this.opcionesListaService.cargarCiclofosfamida73_3().subscribe(res => {
      this.C109_CAMPO_73_3 = res;
    })
  }
  cargarCorticoides73_4() {
    this.opcionesListaService.cargarCorticoides73_4().subscribe(res => {
      this.C110_CAMPO_73_4 = res;
    })
  }
  cargarDpenicilaimina73_5() {
    this.opcionesListaService.cargarDpenicilaimina73_5().subscribe(res => {
      this.C111_CAMPO_73_5 = res;
    })
  }
  cargarEtanercept73_6() {
    this.opcionesListaService.cargarEtanercept73_6().subscribe(res => {
      this.C112_CAMPO_73_6 = res;
    })
  }
  cargarLeflunomida73_7() {
    this.opcionesListaService.cargarLeflunomida73_7().subscribe(res => {
      this.C113_CAMPO_73_7 = res;
    })
  }
  cargarMetotrexate73_8() {
    this.opcionesListaService.cargarMetotrexate73_8().subscribe(res => {
      this.C114_CAMPO_73_8 = res;
    })
  }
  cargarRituximab73_9() {
    this.opcionesListaService.cargarAnakinra47_10().subscribe(res => {
      this.C115_CAMPO_73_9 = res;
    })
  }
  cargarSulfasalazina73_10() {
    this.opcionesListaService.cargarSulfasalazina73_10().subscribe(res => {
      this.C116_CAMPO_73_10 = res;
    })
  }
  cargarAbatacept74_1() {
    this.opcionesListaService.cargarAbatacept74_1().subscribe(res => {
      this.C117_CAMPO_74_1 = res;
    })
  }
  cargarAdalimumab74_2() {
    this.opcionesListaService.cargarAdalimumab74_2().subscribe(res => {
      this.C118_CAMPO_74_2 = res;
    })

  }
  cargarCertolizumab74_3() {
    this.opcionesListaService.cargarCertolizumab74_3().subscribe(res => {
      this.C119_CAMPO_74_3 = res;
    })

  }
  cargarGolimumab74_4() {
    this.opcionesListaService.cargarGolimumab74_4().subscribe(res => {
      this.C120_CAMPO_74_4 = res;
    })

  }
  cargaHidroxicloroquina74_5() {
    this.opcionesListaService.cargaHidroxicloroquina74_5().subscribe(res => {
      this.C121_CAMPO_74_5 = res;
    })
  }
  cargarInfliximab74_6() {
    this.opcionesListaService.cargarInfliximab74_6().subscribe(res => {
      this.C122_CAMPO_74_6 = res;
    })
  }
  cargarSalesdeoro74_7() {
    this.opcionesListaService.cargarSalesdeoro74_7().subscribe(res => {
      this.C123_CAMPO_74_7 = res;
    })
  }
  cargarTocilizumab74_8() {
    this.opcionesListaService.cargarTocilizumab74_8().subscribe(res => {
      this.C124_CAMPO_74_8 = res;
    })
  }
  cargarTofacitinib74_9() {
    this.opcionesListaService.cargarTofacitinib74_9().subscribe(res => {
      this.C125_CAMPO_74_9 = res;
    })
  }
  cargarAnakinra74_10() {
    this.opcionesListaService.cargarAnakinra74_10().subscribe(res => {
      this.C126_CAMPO_74_10 = res;
    })
  }
  cargarReemplazoarticular1porAR575_4() {
    this.opcionesListaService.cargarReemplazoarticular1porAR575_4().subscribe(res => {
      this.C134_CAMPO_75_4 = res;
    })
  }
  cargarReemplazoarticular2porAR75_5() {
    this.opcionesListaService.cargarReemplazoarticular2porAR75_5().subscribe(res => {
      this.C135_CAMPO_75_5 = res;
    })
  }
  cargarReemplazoarticular3porAR75_6() {
    this.opcionesListaService.cargarReemplazoarticular3porAR75_6().subscribe(res => {
      this.C136_CAMPO_75_6 = res;
    })
  }
  cargarReemplazoarticula4porAR75_7() {
    this.opcionesListaService.cargarReemplazoarticula4porAR75_7().subscribe(res => {
      this.C137_CAMPO_75_7 = res;
    })
  }
  cargarQuienhacelaatencionclinicaparaAR80() {
    this.opcionesListaService.cargarQuienhacelaatencionclinicaparaAR80().subscribe(res => {
      this.C142_CAMPO_80 = res;
    })
  }
  cargarNovedaddelpacienterespectoalreporteanterior81() {
    this.opcionesListaService.cargarNovedaddelpacienterespectoalreporteanterior81().subscribe(res => {
      this.C143_CAMPO_81 = res;
    })
  }
  cargarCausademuerte85() {
    this.opcionesListaService.cargarCausademuerte85().subscribe(res => {
      this.C147_CAMPO_85 = res;
    })
  }

  GuargarDatos() {
    for (let i = 0; i < this.artritis.length; i++) {
      this.ARTRITIS.CAMPO_1 = this.artritis[i].CAMPO_1;
      this.ARTRITIS.CAMPO_2 = this.artritis[i].CAMPO_2;
      this.ARTRITIS.CAMPO_3 = this.artritis[i].CAMPO_3;
      this.ARTRITIS.CAMPO_4 = this.artritis[i].CAMPO_4;
      this.ARTRITIS.CAMPO_5 = this.artritis[i].CAMPO_5;
      this.ARTRITIS.CAMPO_6 = this.artritis[i].CAMPO_6;
      this.ARTRITIS.CAMPO_7 = this.artritis[i].CAMPO_7;
      this.ARTRITIS.CAMPO_8 = this.artritis[i].CAMPO_8;
      this.ARTRITIS.CAMPO_9 = this.artritis[i].CAMPO_9;
      this.ARTRITIS.CAMPO_10 = this.artritis[i].CAMPO_10;
      this.ARTRITIS.CAMPO_11 = this.artritis[i].CAMPO_11;
      this.ARTRITIS.CAMPO_12 = this.artritis[i].CAMPO_12;
      this.ARTRITIS.CAMPO_13 = this.artritis[i].CAMPO_13;
      this.ARTRITIS.CAMPO_14 = this.artritis[i].CAMPO_14;
      this.ARTRITIS.CAMPO_15 = this.artritis[i].CAMPO_15;
      this.ARTRITIS.CAMPO_16 = this.artritis[i].CAMPO_16;
      this.ARTRITIS.CAMPO_17 = this.artritis[i].CAMPO_17;
      this.ARTRITIS.CAMPO_18 = this.artritis[i].CAMPO_18;
      this.ARTRITIS.CAMPO_19 = this.artritis[i].CAMPO_19;
      this.ARTRITIS.CAMPO_20 = this.artritis[i].CAMPO_20;
      this.ARTRITIS.CAMPO_21 = this.artritis[i].CAMPO_21;
      this.ARTRITIS.CAMPO_22 = this.artritis[i].CAMPO_22;
      this.ARTRITIS.CAMPO_23 = this.artritis[i].CAMPO_23;
      this.ARTRITIS.CAMPO_24 = this.artritis[i].CAMPO_24;
      this.ARTRITIS.CAMPO_25 = this.artritis[i].CAMPO_25;
      this.ARTRITIS.CAMPO_26 = this.artritis[i].CAMPO_26;
      this.ARTRITIS.CAMPO_27 = this.artritis[i].CAMPO_27;
      this.ARTRITIS.CAMPO_28 = this.artritis[i].CAMPO_28;
      this.ARTRITIS.CAMPO_29 = this.artritis[i].CAMPO_29;
      this.ARTRITIS.CAMPO_30 = this.artritis[i].CAMPO_30;
      this.ARTRITIS.CAMPO_31 = this.artritis[i].CAMPO_31;
      this.ARTRITIS.CAMPO_32 = this.artritis[i].CAMPO_32;
      this.ARTRITIS.CAMPO_33 = this.artritis[i].CAMPO_33;
      this.ARTRITIS.CAMPO_34 = this.artritis[i].CAMPO_34;
      this.ARTRITIS.CAMPO_35 = this.artritis[i].CAMPO_35;
      this.ARTRITIS.CAMPO_36 = this.artritis[i].CAMPO_36;
      this.ARTRITIS.CAMPO_37 = this.artritis[i].CAMPO_37;
      this.ARTRITIS.CAMPO_38 = this.artritis[i].CAMPO_38
      this.ARTRITIS.CAMPO_39 = this.artritis[i].CAMPO_39;
      this.ARTRITIS.CAMPO_40 = this.artritis[i].CAMPO_40;
      this.ARTRITIS.CAMPO_41 = this.artritis[i].CAMPO_41;
      this.ARTRITIS.CAMPO_42 = this.artritis[i].CAMPO_42;
      this.ARTRITIS.CAMPO_43 = this.artritis[i].CAMPO_43;
      this.ARTRITIS.CAMPO_44 = this.artritis[i].CAMPO_44;
      this.ARTRITIS.CAMPO_45_1 = this.artritis[i].CAMPO_45_1;
      this.ARTRITIS.CAMPO_45_2 = this.artritis[i].CAMPO_45_2;
      this.ARTRITIS.CAMPO_45_3 = this.artritis[i].CAMPO_45_3;
      this.ARTRITIS.CAMPO_45_4 = this.artritis[i].CAMPO_45_4;
      this.ARTRITIS.CAMPO_45_5 = this.artritis[i].CAMPO_45_5;
      this.ARTRITIS.CAMPO_45_6 = this.artritis[i].CAMPO_45_6;
      this.ARTRITIS.CAMPO_45_7 = this.artritis[i].CAMPO_45_7;
      this.ARTRITIS.CAMPO_45_8 = this.artritis[i].CAMPO_45_8;
      this.ARTRITIS.CAMPO_46_1 = this.artritis[i].CAMPO_46_1;
      this.ARTRITIS.CAMPO_46_2 = this.artritis[i].CAMPO_46_2;
      this.ARTRITIS.CAMPO_46_3 = this.artritis[i].CAMPO_46_3;
      this.ARTRITIS.CAMPO_46_4 = this.artritis[i].CAMPO_46_4;
      this.ARTRITIS.CAMPO_46_5 = this.artritis[i].CAMPO_46_5;
      this.ARTRITIS.CAMPO_46_6 = this.artritis[i].CAMPO_46_6;
      this.ARTRITIS.CAMPO_46_7 = this.artritis[i].CAMPO_46_7;
      this.ARTRITIS.CAMPO_46_8 = this.artritis[i].CAMPO_46_8;
      this.ARTRITIS.CAMPO_46_9 = this.artritis[i].CAMPO_46_9;
      this.ARTRITIS.CAMPO_46_10 = this.artritis[i].CAMPO_46_10;
      this.ARTRITIS.CAMPO_47_1 = this.artritis[i].CAMPO_47_1;
      this.ARTRITIS.CAMPO_47_2 = this.artritis[i].CAMPO_47_2;
      this.ARTRITIS.CAMPO_47_3 = this.artritis[i].CAMPO_47_3;
      this.ARTRITIS.CAMPO_47_4 = this.artritis[i].CAMPO_47_4;
      this.ARTRITIS.CAMPO_47_5 = this.artritis[i].CAMPO_47_5;
      this.ARTRITIS.CAMPO_47_6 = this.artritis[i].CAMPO_47_6;
      this.ARTRITIS.CAMPO_47_7 = this.artritis[i].CAMPO_47_7;
      this.ARTRITIS.CAMPO_47_8 = this.artritis[i].CAMPO_47_8;
      this.ARTRITIS.CAMPO_47_9 = this.artritis[i].CAMPO_47_9;
      this.ARTRITIS.CAMPO_47_10 = this.artritis[i].CAMPO_47_10;
      this.ARTRITIS.CAMPO_47_11 = this.artritis[i].CAMPO_47_11;
      this.ARTRITIS.CAMPO_47_12 = this.artritis[i].CAMPO_47_12;
      this.ARTRITIS.CAMPO_47_13 = this.artritis[i].CAMPO_47_13;
      this.ARTRITIS.CAMPO_47_14 = this.artritis[i].CAMPO_47_14;
      this.ARTRITIS.CAMPO_48 = this.artritis[i].CAMPO_48;
      this.ARTRITIS.CAMPO_49 = this.artritis[i].CAMPO_49;
      this.ARTRITIS.CAMPO_50 = this.artritis[i].CAMPO_50;
      this.ARTRITIS.CAMPO_51 = this.artritis[i].CAMPO_51;
      this.ARTRITIS.CAMPO_52 = this.artritis[i].CAMPO_52;
      this.ARTRITIS.CAMPO_53 = this.artritis[i].CAMPO_53;
      this.ARTRITIS.CAMPO_54 = this.artritis[i].CAMPO_54;
      this.ARTRITIS.CAMPO_55 = this.artritis[i].CAMPO_55;
      this.ARTRITIS.CAMPO_56 = this.artritis[i].CAMPO_56;
      this.ARTRITIS.CAMPO_57 = this.artritis[i].CAMPO_57;
      this.ARTRITIS.CAMPO_58 = this.artritis[i].CAMPO_58;
      this.ARTRITIS.CAMPO_59 = this.artritis[i].CAMPO_59;
      this.ARTRITIS.CAMPO_60 = this.artritis[i].CAMPO_60;
      this.ARTRITIS.CAMPO_61 = this.artritis[i].CAMPO_61;
      this.ARTRITIS.CAMPO_62 = this.artritis[i].CAMPO_62;
      this.ARTRITIS.CAMPO_63 = this.artritis[i].CAMPO_63;
      this.ARTRITIS.CAMPO_64 = this.artritis[i].CAMPO_64;
      this.ARTRITIS.CAMPO_65 = this.artritis[i].CAMPO_65;
      this.ARTRITIS.CAMPO_66 = this.artritis[i].CCAMPO_66;
      this.ARTRITIS.CAMPO_67 = this.artritis[i].CAMPO_67;
      this.ARTRITIS.CAMPO_68 = this.artritis[i].CAMPO_68;
      this.ARTRITIS.CAMPO_69 = this.artritis[i].CAMPO_69;
      this.ARTRITIS.CAMPO_70 = this.artritis[i].CAMPO_70;
      this.ARTRITIS.CAMPO_71_1 = this.artritis[i].CAMPO_71_1;
      this.ARTRITIS.CAMPO_71_2 = this.artritis[i].CAMPO_71_2;
      this.ARTRITIS.CAMPO_71_3 = this.artritis[i].CAMPO_71_3;
      this.ARTRITIS.CAMPO_71_4 = this.artritis[i].CAMPO_71_4;
      this.ARTRITIS.CAMPO_71_5 = this.artritis[i].CAMPO_71_5;
      this.ARTRITIS.CAMPO_71_6 = this.artritis[i].CAMPO_71_6;
      this.ARTRITIS.CAMPO_71_7 = this.artritis[i].CAMPO_71_7;
      this.ARTRITIS.CAMPO_72 = this.artritis[i].CAMPO_72;
      this.ARTRITIS.CAMPO_73_1 = this.artritis[i].CAMPO_73_1;
      this.ARTRITIS.CAMPO_73_2 = this.artritis[i].CAMPO_73_2;
      this.ARTRITIS.CAMPO_73_3 = this.artritis[i].CAMPO_73_3;
      this.ARTRITIS.CAMPO_73_4 = this.artritis[i].CAMPO_73_4;
      this.ARTRITIS.CAMPO_73_5 = this.artritis[i].CAMPO_73_5;
      this.ARTRITIS.CAMPO_73_6 = this.artritis[i].CAMPO_73_6;
      this.ARTRITIS.CAMPO_73_7 = this.artritis[i].CAMPO_73_7;
      this.ARTRITIS.CAMPO_73_8 = this.artritis[i].CAMPO_73_8;
      this.ARTRITIS.CAMPO_73_9 = this.artritis[i].CAMPO_73_9;
      this.ARTRITIS.CAMPO_73_10 = this.artritis[i].CAMPO_73_10;
      this.ARTRITIS.CAMPO_74_1 = this.artritis[i].CAMPO_74_1;
      this.ARTRITIS.CAMPO_74_2 = this.artritis[i].CAMPO_74_2;
      this.ARTRITIS.CAMPO_74_3 = this.artritis[i].CAMPO_74_3;
      this.ARTRITIS.CAMPO_74_4 = this.artritis[i].CAMPO_74_4;
      this.ARTRITIS.CAMPO_74_5 = this.artritis[i].CAMPO_74_5;
      this.ARTRITIS.CAMPO_74_6 = this.artritis[i].CAMPO_74_6;
      this.ARTRITIS.CAMPO_74_7 = this.artritis[i].CAMPO_74_7;
      this.ARTRITIS.CAMPO_74_8 = this.artritis[i].CAMPO_74_8;
      this.ARTRITIS.CAMPO_74_9 = this.artritis[i].CAMPO_74_9;
      this.ARTRITIS.CAMPO_74_10 = this.artritis[i].CAMPO_74_10;
      this.ARTRITIS.CAMPO_74_11 = this.artritis[i].CAMPO_74_11;
      this.ARTRITIS.CAMPO_74_12 = this.artritis[i].CAMPO_74_12;
      this.ARTRITIS.CAMPO_74_13 = this.artritis[i].CAMPO_74_13;
      this.ARTRITIS.CAMPO_74_14 = this.artritis[i].CAMPO_74_14;
      this.ARTRITIS.CAMPO_75_1 = this.artritis[i].CAMPO_75_1;
      this.ARTRITIS.CAMPO_75_2 = this.artritis[i].CAMPO_75_2;
      this.ARTRITIS.CAMPO_75_3 = this.artritis[i].CAMPO_75_3;
      this.ARTRITIS.CAMPO_75_4 = this.artritis[i].CAMPO_75_4;
      this.ARTRITIS.CAMPO_75_5 = this.artritis[i].CAMPO_75_5;
      this.ARTRITIS.CAMPO_75_6 = this.artritis[i].CAMPO_75_6;
      this.ARTRITIS.CAMPO_75_7 = this.artritis[i].CAMPO_75_7;
      this.ARTRITIS.CAMPO_76 = this.artritis[i].CAMPO_76;
      this.ARTRITIS.CAMPO_77 = this.artritis[i].CAMPO_77;
      this.ARTRITIS.CAMPO_78 = this.artritis[i].CAMPO_78;
      this.ARTRITIS.CAMPO_79 = this.artritis[i].CAMPO_79;
      this.ARTRITIS.CAMPO_80 = this.artritis[i].CAMPO_80;
      this.ARTRITIS.CAMPO_81 = this.artritis[i].CAMPO_81;
      this.ARTRITIS.CAMPO_82 = this.artritis[i].CAMPO_82;
      this.ARTRITIS.CAMPO_83 = this.artritis[i].CAMPO_83;
      this.ARTRITIS.CAMPO_84 = this.artritis[i].CAMPO_84;
      this.ARTRITIS.CAMPO_85 = this.artritis[i].CAMPO_85;
      this.ARTRITIS.CAMPO_86 = this.artritis[i].CAMPO_86;
      this.ARTRITIS.CAMPO_87 = this.artritis[i].CAMPO_87;
      this.ARTRITIS.CAMPO_88 = this.artritis[i].CAMPO_88;
      this.ARTRITIS.CAMPO_89 = this.artritis[i].CAMPO_89;
      this.ARTRITIS.CAMPO_90 = this.artritis[i].CAMPO_90;
      this.ARTRITIS.CAMPO_91 = this.artritis[i].CAMPO_91;
    }
    console.log(this.ARTRITIS)

    this.Artritisservice.ActualizarDatos(this.CC, this.ARTRITIS).subscribe(res => {
      console.log(res)
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {

        }
      })
    })
  }

  guardarCamposValidacion() {
    for (let i = 0; i < this.artritis.length; i++) {
      this.ARTRITIS.CAMPO_1 = this.artritis[i].CAMPO_1;
      this.ARTRITIS.CAMPO_2 = this.artritis[i].CAMPO_2;
      this.ARTRITIS.CAMPO_3 = this.artritis[i].CAMPO_3;
      this.ARTRITIS.CAMPO_4 = this.artritis[i].CAMPO_4;
      this.ARTRITIS.CAMPO_5 = this.artritis[i].CAMPO_5;
      this.ARTRITIS.CAMPO_6 = this.artritis[i].CAMPO_6;
      this.ARTRITIS.CAMPO_7 = this.artritis[i].CAMPO_7;
      this.ARTRITIS.CAMPO_8 = this.artritis[i].CAMPO_8;
      this.ARTRITIS.CAMPO_9 = this.artritis[i].CAMPO_9;
      this.ARTRITIS.CAMPO_10 = this.artritis[i].CAMPO_10;
      this.ARTRITIS.CAMPO_11 = this.artritis[i].CAMPO_11;
      this.ARTRITIS.CAMPO_12 = this.artritis[i].CAMPO_12;
      this.ARTRITIS.CAMPO_13 = this.artritis[i].CAMPO_13;
      this.ARTRITIS.CAMPO_14 = this.artritis[i].CAMPO_14;
      this.ARTRITIS.CAMPO_15 = this.artritis[i].CAMPO_15;
      this.ARTRITIS.CAMPO_16 = this.artritis[i].CAMPO_16;
      this.ARTRITIS.CAMPO_17 = this.artritis[i].CAMPO_17;
      this.ARTRITIS.CAMPO_18 = this.artritis[i].CAMPO_18;
      this.ARTRITIS.CAMPO_19 = this.artritis[i].CAMPO_19;
      this.ARTRITIS.CAMPO_20 = this.artritis[i].CAMPO_20;
      this.ARTRITIS.CAMPO_21 = this.artritis[i].CAMPO_21;
      this.ARTRITIS.CAMPO_22 = this.artritis[i].CAMPO_22;
      this.ARTRITIS.CAMPO_23 = this.artritis[i].CAMPO_23;
      this.ARTRITIS.CAMPO_24 = this.artritis[i].CAMPO_24;
      this.ARTRITIS.CAMPO_25 = this.artritis[i].CAMPO_25;
      this.ARTRITIS.CAMPO_26 = this.artritis[i].CAMPO_26;
      this.ARTRITIS.CAMPO_27 = this.artritis[i].CAMPO_27;
      this.ARTRITIS.CAMPO_28 = this.artritis[i].CAMPO_28;
      this.ARTRITIS.CAMPO_29 = this.artritis[i].CAMPO_29;
      this.ARTRITIS.CAMPO_30 = this.artritis[i].CAMPO_30;
      this.ARTRITIS.CAMPO_31 = this.artritis[i].CAMPO_31;
      this.ARTRITIS.CAMPO_32 = this.artritis[i].CAMPO_32;
      this.ARTRITIS.CAMPO_33 = this.artritis[i].CAMPO_33;
      this.ARTRITIS.CAMPO_34 = this.artritis[i].CAMPO_34;
      this.ARTRITIS.CAMPO_35 = this.artritis[i].CAMPO_35;
      this.ARTRITIS.CAMPO_36 = this.artritis[i].CAMPO_36;
      this.ARTRITIS.CAMPO_37 = this.artritis[i].CAMPO_37;
      this.ARTRITIS.CAMPO_38 = this.artritis[i].CAMPO_38
      this.ARTRITIS.CAMPO_39 = this.artritis[i].CAMPO_39;
      this.ARTRITIS.CAMPO_40 = this.artritis[i].CAMPO_40;
      this.ARTRITIS.CAMPO_41 = this.artritis[i].CAMPO_41;
      this.ARTRITIS.CAMPO_42 = this.artritis[i].CAMPO_42;
      this.ARTRITIS.CAMPO_43 = this.artritis[i].CAMPO_43;
      this.ARTRITIS.CAMPO_44 = this.artritis[i].CAMPO_44;
      this.ARTRITIS.CAMPO_45_1 = this.artritis[i].CAMPO_45_1;
      this.ARTRITIS.CAMPO_45_2 = this.artritis[i].CAMPO_45_2;
      this.ARTRITIS.CAMPO_45_3 = this.artritis[i].CAMPO_45_3;
      this.ARTRITIS.CAMPO_45_4 = this.artritis[i].CAMPO_45_4;
      this.ARTRITIS.CAMPO_45_5 = this.artritis[i].CAMPO_45_5;
      this.ARTRITIS.CAMPO_45_6 = this.artritis[i].CAMPO_45_6;
      this.ARTRITIS.CAMPO_45_7 = this.artritis[i].CAMPO_45_7;
      this.ARTRITIS.CAMPO_45_8 = this.artritis[i].CAMPO_45_8;
      this.ARTRITIS.CAMPO_46_1 = this.artritis[i].CAMPO_46_1;
      this.ARTRITIS.CAMPO_46_2 = this.artritis[i].CAMPO_46_2;
      this.ARTRITIS.CAMPO_46_3 = this.artritis[i].CAMPO_46_3;
      this.ARTRITIS.CAMPO_46_4 = this.artritis[i].CAMPO_46_4;
      this.ARTRITIS.CAMPO_46_5 = this.artritis[i].CAMPO_46_5;
      this.ARTRITIS.CAMPO_46_6 = this.artritis[i].CAMPO_46_6;
      this.ARTRITIS.CAMPO_46_7 = this.artritis[i].CAMPO_46_7;
      this.ARTRITIS.CAMPO_46_8 = this.artritis[i].CAMPO_46_8;
      this.ARTRITIS.CAMPO_46_9 = this.artritis[i].CAMPO_46_9;
      this.ARTRITIS.CAMPO_46_10 = this.artritis[i].CAMPO_46_10;
      this.ARTRITIS.CAMPO_47_1 = this.artritis[i].CAMPO_47_1;
      this.ARTRITIS.CAMPO_47_2 = this.artritis[i].CAMPO_47_2;
      this.ARTRITIS.CAMPO_47_3 = this.artritis[i].CAMPO_47_3;
      this.ARTRITIS.CAMPO_47_4 = this.artritis[i].CAMPO_47_4;
      this.ARTRITIS.CAMPO_47_5 = this.artritis[i].CAMPO_47_5;
      this.ARTRITIS.CAMPO_47_6 = this.artritis[i].CAMPO_47_6;
      this.ARTRITIS.CAMPO_47_7 = this.artritis[i].CAMPO_47_7;
      this.ARTRITIS.CAMPO_47_8 = this.artritis[i].CAMPO_47_8;
      this.ARTRITIS.CAMPO_47_9 = this.artritis[i].CAMPO_47_9;
      this.ARTRITIS.CAMPO_47_10 = this.artritis[i].CAMPO_47_10;
      this.ARTRITIS.CAMPO_47_11 = this.artritis[i].CAMPO_47_11;
      this.ARTRITIS.CAMPO_47_12 = this.artritis[i].CAMPO_47_12;
      this.ARTRITIS.CAMPO_47_13 = this.artritis[i].CAMPO_47_13;
      this.ARTRITIS.CAMPO_47_14 = this.artritis[i].CAMPO_47_14;
      this.ARTRITIS.CAMPO_48 = this.artritis[i].CAMPO_48;
      this.ARTRITIS.CAMPO_49 = this.artritis[i].CAMPO_49;
      this.ARTRITIS.CAMPO_50 = this.artritis[i].CAMPO_50;
      this.ARTRITIS.CAMPO_51 = this.artritis[i].CAMPO_51;
      this.ARTRITIS.CAMPO_52 = this.artritis[i].CAMPO_52;
      this.ARTRITIS.CAMPO_53 = this.artritis[i].CAMPO_53;
      this.ARTRITIS.CAMPO_54 = this.artritis[i].CAMPO_54;
      this.ARTRITIS.CAMPO_55 = this.artritis[i].CAMPO_55;
      this.ARTRITIS.CAMPO_56 = this.artritis[i].CAMPO_56;
      this.ARTRITIS.CAMPO_57 = this.artritis[i].CAMPO_57;
      this.ARTRITIS.CAMPO_58 = this.artritis[i].CAMPO_58;
      this.ARTRITIS.CAMPO_59 = this.artritis[i].CAMPO_59;
      this.ARTRITIS.CAMPO_60 = this.artritis[i].CAMPO_60;
      this.ARTRITIS.CAMPO_61 = this.artritis[i].CAMPO_61;
      this.ARTRITIS.CAMPO_62 = this.artritis[i].CAMPO_62;
      this.ARTRITIS.CAMPO_63 = this.artritis[i].CAMPO_63;
      this.ARTRITIS.CAMPO_64 = this.artritis[i].CAMPO_64;
      this.ARTRITIS.CAMPO_65 = this.artritis[i].CAMPO_65;
      this.ARTRITIS.CAMPO_66 = this.artritis[i].CCAMPO_66;
      this.ARTRITIS.CAMPO_67 = this.artritis[i].CAMPO_67;
      this.ARTRITIS.CAMPO_68 = this.artritis[i].CAMPO_68;
      this.ARTRITIS.CAMPO_69 = this.artritis[i].CAMPO_69;
      this.ARTRITIS.CAMPO_70 = this.artritis[i].CAMPO_70;
      this.ARTRITIS.CAMPO_71_1 = this.artritis[i].CAMPO_71_1;
      this.ARTRITIS.CAMPO_71_2 = this.artritis[i].CAMPO_71_2;
      this.ARTRITIS.CAMPO_71_3 = this.artritis[i].CAMPO_71_3;
      this.ARTRITIS.CAMPO_71_4 = this.artritis[i].CAMPO_71_4;
      this.ARTRITIS.CAMPO_71_5 = this.artritis[i].CAMPO_71_5;
      this.ARTRITIS.CAMPO_71_6 = this.artritis[i].CAMPO_71_6;
      this.ARTRITIS.CAMPO_71_7 = this.artritis[i].CAMPO_71_7;
      this.ARTRITIS.CAMPO_72 = this.artritis[i].CAMPO_72;
      this.ARTRITIS.CAMPO_73_1 = this.artritis[i].CAMPO_73_1;
      this.ARTRITIS.CAMPO_73_2 = this.artritis[i].CAMPO_73_2;
      this.ARTRITIS.CAMPO_73_3 = this.artritis[i].CAMPO_73_3;
      this.ARTRITIS.CAMPO_73_4 = this.artritis[i].CAMPO_73_4;
      this.ARTRITIS.CAMPO_73_5 = this.artritis[i].CAMPO_73_5;
      this.ARTRITIS.CAMPO_73_6 = this.artritis[i].CAMPO_73_6;
      this.ARTRITIS.CAMPO_73_7 = this.artritis[i].CAMPO_73_7;
      this.ARTRITIS.CAMPO_73_8 = this.artritis[i].CAMPO_73_8;
      this.ARTRITIS.CAMPO_73_9 = this.artritis[i].CAMPO_73_9;
      this.ARTRITIS.CAMPO_73_10 = this.artritis[i].CAMPO_73_10;
      this.ARTRITIS.CAMPO_74_1 = this.artritis[i].CAMPO_74_1;
      this.ARTRITIS.CAMPO_74_2 = this.artritis[i].CAMPO_74_2;
      this.ARTRITIS.CAMPO_74_3 = this.artritis[i].CAMPO_74_3;
      this.ARTRITIS.CAMPO_74_4 = this.artritis[i].CAMPO_74_4;
      this.ARTRITIS.CAMPO_74_5 = this.artritis[i].CAMPO_74_5;
      this.ARTRITIS.CAMPO_74_6 = this.artritis[i].CAMPO_74_6;
      this.ARTRITIS.CAMPO_74_7 = this.artritis[i].CAMPO_74_7;
      this.ARTRITIS.CAMPO_74_8 = this.artritis[i].CAMPO_74_8;
      this.ARTRITIS.CAMPO_74_9 = this.artritis[i].CAMPO_74_9;
      this.ARTRITIS.CAMPO_74_10 = this.artritis[i].CAMPO_74_10;
      this.ARTRITIS.CAMPO_74_11 = this.artritis[i].CAMPO_74_11;
      this.ARTRITIS.CAMPO_74_12 = this.artritis[i].CAMPO_74_12;
      this.ARTRITIS.CAMPO_74_13 = this.artritis[i].CAMPO_74_13;
      this.ARTRITIS.CAMPO_74_14 = this.artritis[i].CAMPO_74_14;
      this.ARTRITIS.CAMPO_75_1 = this.artritis[i].CAMPO_75_1;
      this.ARTRITIS.CAMPO_75_2 = this.artritis[i].CAMPO_75_2;
      this.ARTRITIS.CAMPO_75_3 = this.artritis[i].CAMPO_75_3;
      this.ARTRITIS.CAMPO_75_4 = this.artritis[i].CAMPO_75_4;
      this.ARTRITIS.CAMPO_75_5 = this.artritis[i].CAMPO_75_5;
      this.ARTRITIS.CAMPO_75_6 = this.artritis[i].CAMPO_75_6;
      this.ARTRITIS.CAMPO_75_7 = this.artritis[i].CAMPO_75_7;
      this.ARTRITIS.CAMPO_76 = this.artritis[i].CAMPO_76;
      this.ARTRITIS.CAMPO_77 = this.artritis[i].CAMPO_77;
      this.ARTRITIS.CAMPO_78 = this.artritis[i].CAMPO_78;
      this.ARTRITIS.CAMPO_79 = this.artritis[i].CAMPO_79;
      this.ARTRITIS.CAMPO_80 = this.artritis[i].CAMPO_80;
      this.ARTRITIS.CAMPO_81 = this.artritis[i].CAMPO_81;
      this.ARTRITIS.CAMPO_82 = this.artritis[i].CAMPO_82;
      this.ARTRITIS.CAMPO_83 = this.artritis[i].CAMPO_83;
      this.ARTRITIS.CAMPO_84 = this.artritis[i].CAMPO_84;
      this.ARTRITIS.CAMPO_85 = this.artritis[i].CAMPO_85;
      this.ARTRITIS.CAMPO_86 = this.artritis[i].CAMPO_86;
      this.ARTRITIS.CAMPO_87 = this.artritis[i].CAMPO_87;
      this.ARTRITIS.CAMPO_88 = this.artritis[i].CAMPO_88;
      this.ARTRITIS.CAMPO_89 = this.artritis[i].CAMPO_89;
      this.ARTRITIS.CAMPO_90 = this.artritis[i].CAMPO_90;
      this.ARTRITIS.CAMPO_91 = this.artritis[i].CAMPO_91;
    }
    console.log(this.ARTRITIS)

    this.Artritisservice.validarRegistrosEdit(this.CC, this.ARTRITIS).subscribe(res => {
      console.log(res)
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {

        }
      })
    })
  }

  GuardarRegistros(){
    if(this.validacionRegistro == true){
     this.guardarCamposValidacion()
    }else{
      this.GuargarDatos();
    }
  }

  cargarErrores() {
    this.LogsErroresArtritisService.cargarErroresFrm(this.CC).subscribe(res => {
      this.Artritislist = res;
      console.log(this.Artritislist)
    })
  }
  openLg(content) {
    this. cargarErrores();
    this.modalService.open(content, { size: 'lg', scrollable: true });
  }


}
