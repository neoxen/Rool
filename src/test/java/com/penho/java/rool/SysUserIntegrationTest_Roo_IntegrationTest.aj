// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.penho.java.rool;

import com.penho.java.rool.SysUserDataOnDemand;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

privileged aspect SysUserIntegrationTest_Roo_IntegrationTest {
    
    declare @type: SysUserIntegrationTest: @RunWith(SpringJUnit4ClassRunner.class);
    
    declare @type: SysUserIntegrationTest: @ContextConfiguration(locations = "classpath:/META-INF/spring/applicationContext.xml");
    
    declare @type: SysUserIntegrationTest: @Transactional;
    
    @Autowired
    private SysUserDataOnDemand SysUserIntegrationTest.dod;
    
    @Test
    public void SysUserIntegrationTest.testCountSysUsers() {
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", dod.getRandomSysUser());
        long count = com.penho.java.rool.SysUser.countSysUsers();
        org.junit.Assert.assertTrue("Counter for 'SysUser' incorrectly reported there were no entries", count > 0);
    }
    
    @Test
    public void SysUserIntegrationTest.testFindSysUser() {
        com.penho.java.rool.SysUser obj = dod.getRandomSysUser();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to provide an identifier", id);
        obj = com.penho.java.rool.SysUser.findSysUser(id);
        org.junit.Assert.assertNotNull("Find method for 'SysUser' illegally returned null for id '" + id + "'", obj);
        org.junit.Assert.assertEquals("Find method for 'SysUser' returned the incorrect identifier", id, obj.getId());
    }
    
    @Test
    public void SysUserIntegrationTest.testFindAllSysUsers() {
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", dod.getRandomSysUser());
        long count = com.penho.java.rool.SysUser.countSysUsers();
        org.junit.Assert.assertTrue("Too expensive to perform a find all test for 'SysUser', as there are " + count + " entries; set the findAllMaximum to exceed this value or set findAll=false on the integration test annotation to disable the test", count < 250);
        java.util.List<com.penho.java.rool.SysUser> result = com.penho.java.rool.SysUser.findAllSysUsers();
        org.junit.Assert.assertNotNull("Find all method for 'SysUser' illegally returned null", result);
        org.junit.Assert.assertTrue("Find all method for 'SysUser' failed to return any data", result.size() > 0);
    }
    
    @Test
    public void SysUserIntegrationTest.testFindSysUserEntries() {
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", dod.getRandomSysUser());
        long count = com.penho.java.rool.SysUser.countSysUsers();
        if (count > 20) count = 20;
        java.util.List<com.penho.java.rool.SysUser> result = com.penho.java.rool.SysUser.findSysUserEntries(0, (int) count);
        org.junit.Assert.assertNotNull("Find entries method for 'SysUser' illegally returned null", result);
        org.junit.Assert.assertEquals("Find entries method for 'SysUser' returned an incorrect number of entries", count, result.size());
    }
    
    @Test
    public void SysUserIntegrationTest.testFlush() {
        com.penho.java.rool.SysUser obj = dod.getRandomSysUser();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to provide an identifier", id);
        obj = com.penho.java.rool.SysUser.findSysUser(id);
        org.junit.Assert.assertNotNull("Find method for 'SysUser' illegally returned null for id '" + id + "'", obj);
        boolean modified =  dod.modifySysUser(obj);
        java.lang.Integer currentVersion = obj.getVersion();
        obj.flush();
        org.junit.Assert.assertTrue("Version for 'SysUser' failed to increment on flush directive", (currentVersion != null && obj.getVersion() > currentVersion) || !modified);
    }
    
    @Test
    public void SysUserIntegrationTest.testMerge() {
        com.penho.java.rool.SysUser obj = dod.getRandomSysUser();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to provide an identifier", id);
        obj = com.penho.java.rool.SysUser.findSysUser(id);
        boolean modified =  dod.modifySysUser(obj);
        java.lang.Integer currentVersion = obj.getVersion();
        com.penho.java.rool.SysUser merged =  obj.merge();
        obj.flush();
        org.junit.Assert.assertEquals("Identifier of merged object not the same as identifier of original object", merged.getId(), id);
        org.junit.Assert.assertTrue("Version for 'SysUser' failed to increment on merge and flush directive", (currentVersion != null && obj.getVersion() > currentVersion) || !modified);
    }
    
    @Test
    public void SysUserIntegrationTest.testPersist() {
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", dod.getRandomSysUser());
        com.penho.java.rool.SysUser obj = dod.getNewTransientSysUser(Integer.MAX_VALUE);
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to provide a new transient entity", obj);
        org.junit.Assert.assertNull("Expected 'SysUser' identifier to be null", obj.getId());
        obj.persist();
        obj.flush();
        org.junit.Assert.assertNotNull("Expected 'SysUser' identifier to no longer be null", obj.getId());
    }
    
    @Test
    public void SysUserIntegrationTest.testRemove() {
        com.penho.java.rool.SysUser obj = dod.getRandomSysUser();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'SysUser' failed to provide an identifier", id);
        obj = com.penho.java.rool.SysUser.findSysUser(id);
        obj.remove();
        obj.flush();
        org.junit.Assert.assertNull("Failed to remove 'SysUser' with identifier '" + id + "'", com.penho.java.rool.SysUser.findSysUser(id));
    }
    
}
