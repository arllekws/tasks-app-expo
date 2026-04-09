import React, { useMemo } from 'react';
import { SectionList, StyleSheet, View, Text } from 'react-native';
import TaskItem from './TaskItem';
import { TaskItem as TaskType } from '../utils/handle-api';

interface TaskListProps {
  tasks: TaskType[];
  onUpdate: (task: TaskType) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate, onDelete }) => {
  const sections = useMemo(() => [
    {
      title: '📋 Pendentes',
      data: tasks.filter(t => !t.completed),
    },
    {
      title: '✅ Concluídas',
      data: tasks.filter(t => t.completed),
    },
  ], [tasks]);

  return (
    <View style={styles.listContainer}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.listContent}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderSectionFooter={({ section }) =>
          section.data.length === 0 ? (
            <Text style={styles.emptySection}>Nenhuma tarefa nesta categoria.</Text>
          ) : null
        }
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            updateMode={() => onUpdate(item)}
            deleteTask={() => onDelete(item._id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  emptySection: {
    textAlign: 'center',
    color: '#999',
    paddingVertical: 8,
    fontStyle: 'italic',
  },
});

export default TaskList;