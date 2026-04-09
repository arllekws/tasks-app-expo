import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';

interface AboutScreenProps {
  visible: boolean;
  onClose: () => void;
}

const AboutScreen: React.FC<AboutScreenProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../assets/task-app-banner.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Gerenciador de Tarefas</Text>

        <Text style={styles.paragraph}>
          Este aplicativo foi desenvolvido para ajudar você a organizar suas tarefas do dia a dia de forma simples e eficiente. Com ele, você pode criar, editar e excluir tarefas com facilidade.
        </Text>

        <Text style={styles.paragraph}>
          O app permite definir datas limite para cada tarefa, indicando visualmente quando uma tarefa está vencida ou dentro do prazo. Você também pode marcar tarefas como concluídas e filtrá-las por status.
        </Text>

        <Text style={styles.paragraph}>
          A interface foi pensada para ser limpa e intuitiva, priorizando a produtividade do usuário sem distrações desnecessárias.
        </Text>

        <Text style={styles.sectionTitle}>Tecnologias utilizadas</Text>

        {['React Native', 'Expo', 'TypeScript', 'EAS'].map((tech) => (
          <Text key={tech} style={styles.techItem}>• {tech}</Text>
        ))}

        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeBtnText}>Fechar</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  paragraph: {
    fontSize: 15,
    color: '#444',
    marginBottom: 16,
    lineHeight: 22,
    textAlign: 'justify',
    alignSelf: 'stretch',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 12,
    color: '#000',
    alignSelf: 'flex-start',
  },
  techItem: {
    fontSize: 15,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  closeBtn: {
    marginTop: 32,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  closeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AboutScreen;