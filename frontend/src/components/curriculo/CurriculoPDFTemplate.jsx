import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

/**
 * Gera estilos condicionais baseado se é preview ou não
 */
const getStyles = (isPreview = false) => StyleSheet.create({
  page: {
    padding: 45,
    fontSize: 10.5,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    position: 'relative',
    lineHeight: 1.5,
  },
  watermark: {
    position: 'absolute',
    fontSize: 60,
    color: '#e0e0e0',
    opacity: 0.3,
    transform: 'rotate(-45deg)',
    top: '40%',
    left: '20%',
    fontWeight: 'bold',
  },
  previewBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#8b5cf6',
    color: '#ffffff',
    padding: 10,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
  },
  // ===== HEADER SECTION =====
  header: {
    marginBottom: 20,
    borderBottom: isPreview ? '2px solid #8b5cf6' : '2px solid #e5e7eb',
    paddingBottom: 15,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 8,
    letterSpacing: 0.8,
    textAlign: 'center',
  },
  contactInfo: {
    fontSize: 10,
    color: '#6b7280',
    marginTop: 12,
    lineHeight: 1.7,
    textAlign: 'center',
  },
  contactLine: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 2,
    textAlign: 'center',
  },
  // ===== SECTIONS =====
  section: {
    marginTop: 16,
    marginBottom: 14,
    pageBreakInside: 'avoid',
  },
  sectionTitleContainer: {
    backgroundColor: isPreview ? '#8b5cf6' : '#e5e7eb',
    padding: '8 12',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: isPreview ? '#ffffff' : '#1a202c',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  // ===== COMPETÊNCIAS =====
  competenciaItem: {
    marginBottom: 11,
    paddingBottom: 9,
    borderBottom: '0.5px solid #f0f0f0',
    pageBreakInside: 'avoid',
  },
  competenciaNome: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: 3,
  },
  competenciaCategoria: {
    fontSize: 9,
    color: isPreview ? '#8b5cf6' : '#6b7280',
    marginBottom: 2,
    fontWeight: '500',
  },
  competenciaNivel: {
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 2,
  },
  competenciaDescricao: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.5,
    marginTop: 3,
  },
  // ===== ITENS (Experiência e Formação) =====
  itemContainer: {
    marginBottom: 13,
    paddingBottom: 9,
    borderBottom: '0.5px solid #f0f0f0',
    pageBreakInside: 'avoid',
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: 3,
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 4,
    fontWeight: '500',
  },
  itemDate: {
    fontSize: 9,
    color: '#9ca3af',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.6,
    marginTop: 4,
  },
  // ===== LISTAS/BULLETS =====
  bulletList: {
    marginTop: 8,
    marginBottom: 8,
  },
  bulletItem: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.5,
    marginBottom: 6,
    marginLeft: 15,
  },
  bulletPoint: {
    fontSize: 10,
    color: '#4b5563',
  },
  // ===== FOOTER =====
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 45,
    right: 45,
    textAlign: 'center',
    fontSize: 8,
    color: '#9ca3af',
    borderTop: '1px solid #e5e7eb',
    paddingTop: 10,
  },
});

// Função helper para gerar estilos baseado em isPreview
const styles = getStyles();

/**
 * Template de PDF para o currículo
 */
export const CurriculoPDFTemplate = ({ dados, isPreview = false }) => {
  // Gerar estilos baseado em isPreview
  const dynamicStyles = getStyles(isPreview);
  
  const { dadosPessoais, competencias, experiencias, formacoes } = dados;

  // No preview, mostrar TODOS os dados preenchidos
  const competenciasExibir = competencias || [];
  const experienciasExibir = experiencias || [];
  const formacoesExibir = formacoes || [];

  return (
    <Document>
      <Page size="A4" style={dynamicStyles.page}>
        {/* Banner de preview */}
        {isPreview && (
          <View style={dynamicStyles.previewBanner} fixed>
            <Text>PRÉVIA - Faça o pagamento para desbloquear o currículo completo</Text>
          </View>
        )}

        {/* Marca d'água */}
        {isPreview && (
          <View style={dynamicStyles.watermark} fixed>
            <Text>PREVIEW</Text>
          </View>
        )}

        {/* Header com dados pessoais */}
        <View style={[dynamicStyles.header, isPreview && { marginTop: 30 }]}>
          <Text style={dynamicStyles.name}>
            {dadosPessoais?.nome || 'Nome'}
          </Text>
          <View style={dynamicStyles.contactInfo}>
            {/* Linha 1: Localidade + Telefone */}
            {(dadosPessoais?.endereco || dadosPessoais?.telefone) && (
              <Text style={dynamicStyles.contactLine}>
                {dadosPessoais?.endereco || ''}
                {dadosPessoais?.endereco && dadosPessoais?.telefone ? ' | ' : ''}
                {dadosPessoais?.telefone || ''}
              </Text>
            )}
            
            {/* Linha 2: Email */}
            {dadosPessoais?.email && (
              <Text style={dynamicStyles.contactLine}>
                {dadosPessoais.email}
              </Text>
            )}
            
            {/* Linha 3: LinkedIn + URLs */}
            {(dadosPessoais?.linkedin_url || dadosPessoais?.idade) && (
              <Text style={dynamicStyles.contactLine}>
                {dadosPessoais?.linkedin_url || ''}
                {dadosPessoais?.linkedin_url && dadosPessoais?.idade ? ' | ' : ''}
                {dadosPessoais?.idade ? `${dadosPessoais.idade} anos` : ''}
              </Text>
            )}
          </View>
        </View>

        {/* Seção de Competências */}
        {competenciasExibir && competenciasExibir.length > 0 && (
          <View style={dynamicStyles.section}>
            <View style={dynamicStyles.sectionTitleContainer}>
              <Text style={dynamicStyles.sectionTitle}>COMPETÊNCIAS</Text>
            </View>
            {competenciasExibir.map((comp, index) => (
              <View key={index} style={dynamicStyles.competenciaItem}>
                <Text style={dynamicStyles.competenciaNome}>
                  {comp.nome_competencia || 'Competência'}
                </Text>
                {comp.categoria && (
                  <Text style={dynamicStyles.competenciaCategoria}>
                    {comp.categoria}
                  </Text>
                )}
                {comp.nivel_proficiencia && (
                  <Text style={dynamicStyles.competenciaNivel}>
                    Nível: {comp.nivel_proficiencia}
                  </Text>
                )}
                {comp.descricao && (
                  <Text style={dynamicStyles.competenciaDescricao}>
                    {comp.descricao}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Seção de Experiências Profissionais */}
        {experienciasExibir && experienciasExibir.length > 0 && (
          <View style={dynamicStyles.section}>
            <View style={dynamicStyles.sectionTitleContainer}>
              <Text style={dynamicStyles.sectionTitle}>EXPERIÊNCIA PROFISSIONAL</Text>
            </View>
            {experienciasExibir.map((exp, index) => (
              <View key={index} style={dynamicStyles.itemContainer}>
                <Text style={dynamicStyles.itemTitle}>
                  {exp.titulo_cargo || 'Cargo'}
                </Text>
                <Text style={dynamicStyles.itemSubtitle}>
                  {exp.empresa || 'Empresa'}
                  {exp.localidade ? ` • ${exp.localidade}` : ''}
                </Text>
                <Text style={dynamicStyles.itemDate}>
                  {exp.data_inicio ? new Date(exp.data_inicio).toLocaleDateString('pt-BR') : ''}
                  {exp.data_inicio && ' — '}
                  {exp.atual 
                    ? 'Atualmente' 
                    : exp.data_fim ? new Date(exp.data_fim).toLocaleDateString('pt-BR') : ''}
                </Text>
                {exp.sobre && (
                  <Text style={dynamicStyles.itemDescription}>{exp.sobre}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Seção de Formação Acadêmica */}
        {formacoesExibir && formacoesExibir.length > 0 && (
          <View style={dynamicStyles.section}>
            <View style={dynamicStyles.sectionTitleContainer}>
              <Text style={dynamicStyles.sectionTitle}>FORMAÇÃO ACADÊMICA</Text>
            </View>
            {formacoesExibir.map((form, index) => (
              <View key={index} style={dynamicStyles.itemContainer}>
                <Text style={dynamicStyles.itemTitle}>
                  {form.curso || 'Curso'}
                </Text>
                <Text style={dynamicStyles.itemSubtitle}>
                  {form.instituicao || 'Instituição'}
                  {form.nivel ? ` • ${form.nivel}` : ''}
                </Text>
                <Text style={dynamicStyles.itemDate}>
                  {form.data_inicio ? new Date(form.data_inicio).toLocaleDateString('pt-BR') : ''}
                  {form.data_inicio && ' — '}
                  {form.cursando 
                    ? 'Cursando' 
                    : form.data_conclusao ? new Date(form.data_conclusao).toLocaleDateString('pt-BR') : ''}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Footer */}
        <Text style={dynamicStyles.footer}>
          Currículo gerado por PDFix • {new Date().toLocaleDateString('pt-BR')}
        </Text>
      </Page>
    </Document>
  );
};
