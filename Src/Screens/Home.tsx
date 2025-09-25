import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { Spacing, Typography, AppColors } from '../Theme/index.js';
import ICONS from '../Assets/images/icons/index.js';
import { CButton } from '../Components/shared/index.js';
import dummyTransfers from '../data/data.ts';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation<any>();
  const renderItem = ({ item }: any) => (
    <View style={styles.transferItem}>
      <View style={styles.iconWrapper}>
        {item.type === 'doc' && (
          <Image source={ICONS.SETTINGS} style={styles.icon} />
        )}
        {item.type === 'image' && (
          <Image source={ICONS.SETTINGS} style={styles.icon} />
        )}
        {item.type === 'video' && (
          <Image source={ICONS.SETTINGS} style={styles.icon} />
        )}
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.fileName}>{item.name}</Text>
        <Text style={styles.fileSize}>{item.size}</Text>
      </View>

      <Text
        style={[
          styles.status,
          item.status === 'Completed' ? styles.completed : styles.pending,
        ]}
      >
        {item.status}
      </Text>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Flux Send</Text>
        <Image source={ICONS.SETTINGS} style={styles.settingsIcon} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CButton
          title="Send File"
          variant="primary"
          onPress={() => {
            navigation.navigate('TransferFile');
          }}
        />
        <CButton
          title="Recieve File"
          variant="secondary"
          onPress={() => {
            navigation.navigate('RecieveFile');
          }}
        />
      </View>
      <View>
        <Text style={styles.recentTransfers}>Recent Transfers</Text>
        <FlatList
          data={dummyTransfers}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: Spacing.md }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Typography.lineHeights['2xs'],
  },
  title: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.fontWeights.bold,
    textAlign: 'center',
    flex: 1,
  },
  settingsIcon: {
    position: 'absolute',
    right: Spacing.md,
    width: Typography.size.xl,
    height: Typography.size.xl,
  },
  recentTransfers: {
    fontSize: Typography.size.xl,
    flex: 1,
    fontWeight: Typography.fontWeights.bold,
    textAlign: 'center',
    marginBottom: Typography.lineHeights.xs,
  },
  transferItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    padding: Spacing.md,
    borderRadius: Typography.size.xs,
    marginBottom: Spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: AppColors.textPrimary,
  },
  fileName: {
    fontSize: Typography.size.md,
    fontWeight: Typography.fontWeights.medium as any,
    color: AppColors.textPrimary,
  },
  fileSize: {
    fontSize: Typography.size.sm,
    color: AppColors.textSecondary,
  },
  status: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.fontWeights.medium as any,
  },
  completed: {
    color: AppColors?.success,
  },
  pending: {
    color: AppColors?.warning,
  },
});
