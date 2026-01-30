import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    position: 'relative',
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
    fontSize: 12,
    fontWeight: 'bold',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2px solid #8b5cf6',
    paddingBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    color: '#6b7280',
    marginTop: 5,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8b5cf6',
    marginBottom: 8,
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 4,
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 3,
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 9,
    color: '#9ca3af',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.4,
  },
  competenciaItem: {
    marginBottom: 6,
  },
  competenciaNome: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  competenciaCategoria: {
    fontSize: 9,
    color: '#8b5cf6',
    marginBottom: 2,
  },
  competenciaNivel: {
    fontSize: 9,
    color: '#6b7280',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#9ca3af',
    borderTop: '1px solid #e5e7eb',
    paddingTop: 10,
  },
});

/**
 * Template de PDF para o currículo
 */
export const CurriculoPDFTemplate = ({ dados, isPreview = false }) => {
  const { dadosPessoais, competencias, experiencias, formacoes } = dados;

  // Limitar conteúdo no modo preview
  const competenciasExibir = isPreview ? (competencias || []).slice(0, 2) : (competencias || []);
  const experienciasExibir = isPreview ? (experiencias || []).slice(0, 1) : (experiencias || []);
  const formacoesExibir = isPreview ? (formacoes || []).slice(0, 1) : (formacoes || []);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Banner de preview */}
        {isPreview && (
          <View style={styles.previewBanner} fixed>
            <Text>🔒 PRÉVIA - Faça o pagamento para desbloquear o currículo completo</Text>
          </View>
        )}

        {/* Marca d'água */}
        {isPreview && (
          <View style={styles.watermark} fixed>
            <Text>PREVIEW</Text>
          </View>
        )}

        {/* Header com dados pessoais */}
        <View style={[styles.header, isPreview && { marginTop: 30 }]}>
          <Text style={styles.name}>{dadosPessoais?.nome || 'Nome Completo'}</Text>
          <View style={styles.contactInfo}>
            {dadosPessoais?.email && <Text>📧 {isPreview ? '***@*****.com' : dadosPessoais.email}</Text>}
            {dadosPessoais?.telefone && <Text>📱 {isPreview ? '(***) ****-****' : dadosPessoais.telefone}</Text>}
            {dadosPessoais?.endereco && <Text>📍 {isPreview ? '***' : dadosPessoais.endereco}</Text>}
            {dadosPessoais?.linkedin_url && <Text>🔗 {isPreview ? 'linkedin.com/***' : dadosPessoais.linkedin_url}</Text>}
          </View>
        </View>

        {/* Seção de Competências */}
        {competenciasExibir && competenciasExibir.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>COMPETÊNCIAS</Text>
            {competenciasExibir.map((comp, index) => (
              <View key={index} style={styles.competenciaItem}>
                <Text style={styles.competenciaNome}>{comp.nome_competencia}</Text>
                {comp.categoria && (
                  <Text style={styles.competenciaCategoria}>{comp.categoria}</Text>
                )}
                {comp.nivel_proficiencia && (
                  <Text style={styles.competenciaNivel}>
                    Nível: {comp.nivel_proficiencia}
                  </Text>
                )}
                {comp.descricao && (
                  <Text style={styles.itemDescription}>{comp.descricao}</Text>
                )}
              </View>
            ))}
            {isPreview && competencias && competencias.length > 2 && (
              <Text style={{ marginTop: 10, fontStyle: 'italic', color: '#666', fontSize: 10 }}>
                ... e mais {competencias.length - 2} competência(s) - Desbloqueie para ver tudo
              </Text>
            )}
          </View>
        )}

        {/* Seção de Experiências Profissionais */}
        {experienciasExibir && experienciasExibir.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIÊNCIA PROFISSIONAL</Text>
            {experienciasExibir.map((exp, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{exp.titulo_cargo}</Text>
                <Text style={styles.itemSubtitle}>
                  {exp.empresa} • {exp.localidade}
                </Text>
                <Text style={styles.itemDate}>
                  {exp.data_inicio && new Date(exp.data_inicio).toLocaleDateString('pt-BR')}
                  {' - '}
                  {exp.atual 
                    ? 'Atual' 
                    : exp.data_fim && new Date(exp.data_fim).toLocaleDateString('pt-BR')}
                </Text>
                {exp.sobre && (
                  <Text style={styles.itemDescription}>
                    {isPreview ? exp.sobre.slice(0, 100) + '...' : exp.sobre}
                  </Text>
                )}
              </View>
            ))}
            {isPreview && experiencias && experiencias.length > 1 && (
              <Text style={{ marginTop: 10, fontStyle: 'italic', color: '#666', fontSize: 10 }}>
                ... e mais {experiencias.length - 1} experiência(s) - Desbloqueie para ver tudo
              </Text>
            )}
          </View>
        )}

        {/* Seção de Formação Acadêmica */}
        {formacoesExibir && formacoesExibir.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FORMAÇÃO ACADÊMICA</Text>
            {formacoesExibir.map((form, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{form.curso}</Text>
                <Text style={styles.itemSubtitle}>
                  {form.instituicao} • {form.nivel}
                </Text>
                <Text style={styles.itemDate}>
                  {form.data_inicio && new Date(form.data_inicio).toLocaleDateString('pt-BR')}
                  {' - '}
                  {form.cursando 
                    ? 'Cursando' 
                    : form.data_conclusao && new Date(form.data_conclusao).toLocaleDateString('pt-BR')}
                </Text>
              </View>
            ))}
            {isPreview && formacoes && formacoes.length > 1 && (
              <Text style={{ marginTop: 10, fontStyle: 'italic', color: '#666', fontSize: 10 }}>
                ... e mais {formacoes.length - 1} formação(ões) - Desbloqueie para ver tudo
              </Text>
            )}
          </View>
        )}

        {/* Footer */}
        <Text style={styles.footer}>
          Currículo gerado por PDFix • {new Date().toLocaleDateString('pt-BR')}
        </Text>
      </Page>
    </Document>
  );
};
